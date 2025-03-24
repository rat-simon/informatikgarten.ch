import { prisma } from 'shared/server/lib/prisma'
import { logger } from 'shared/utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'
import type { QuestionRecordLocal, QuestionDataJson } from 'shared/types/UserDataTypes'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Check authentication
    const session = await getServerSession(req, res, authOptions)
    if (!session?.user?.email) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    // Get user
    const user = await prisma.user.findUnique({
        where: { email: session.user.email }
    })
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    // Extract data from request
    const userDataEntry: QuestionRecordLocal = {
        path: typeof req.query.path === 'string' ? req.query.path : req.body?.path as string,
        componentId: typeof req.query.componentId === 'string' ? req.query.componentId : req.body?.componentId as string,
        data: req.body?.data as QuestionDataJson,
        createdAt: typeof req.query.createdAt === 'string' ? req.query.createdAt : req.body?.createdAt as string,
        updatedAt: req.body?.updatedAt as number || Date.now(),
        savedToRemote: false // Default value, will be set to true in responses
    }

    try {
        switch (req.method) {
            case 'GET':
                logger.debug('Retrieving user data', {
                    path: userDataEntry.path,
                    componentId: userDataEntry.componentId
                })

                if (!userDataEntry.path || !userDataEntry.componentId) {
                    return res
                        .status(400)
                        .json({ error: 'Missing path or componentId' })
                }

                // If createdAt is provided, check for that specific version
                if (userDataEntry.createdAt) {
                    const createdAt = userDataEntry.createdAt; // Optimize reference reading

                    const specificVersion = await prisma.userData.findUnique({
                        where: {
                            path_componentId_userId_createdAt: {
                                path: userDataEntry.path,
                                componentId: userDataEntry.componentId,
                                userId: user.id,
                                createdAt
                            }
                        }
                    });

                    // Format the response according to your client-side type expectations
                    return res.status(200).json({
                        exists: !!specificVersion,
                        data: specificVersion ? {
                            path: specificVersion.path,
                            componentId: specificVersion.componentId,
                            data: specificVersion.data as QuestionDataJson,
                            createdAt: specificVersion.createdAt,
                            updatedAt: new Date(specificVersion.updatedAt).getTime(),
                            savedToRemote: true
                        } : null
                    });
                }
                // Otherwise, get the most recent version
                else {
                    const latestData = await prisma.userData.findMany({
                        where: {
                            path: userDataEntry.path,
                            componentId: userDataEntry.componentId,
                            userId: user.id
                        },
                        orderBy: {
                            updatedAt: 'desc'
                        },
                        take: 1
                    });

                    // Format the response according to your client-side type expectations
                    if (latestData.length > 0) {
                        const latest = latestData[0]!;
                        return res.status(200).json({
                            path: latest.path,
                            componentId: latest.componentId,
                            data: latest.data as QuestionDataJson,
                            createdAt: latest.createdAt,
                            updatedAt: new Date(latest.updatedAt).getTime(),
                            savedToRemote: true
                        });
                    } else {
                        return res.status(200).json(null);
                    }
                }

            case 'POST':
                logger.debug('Handling user data save', {
                    path: userDataEntry.path,
                    componentId: userDataEntry.componentId,
                    createdAt: userDataEntry.createdAt
                })

                if (!userDataEntry.path || !userDataEntry.componentId || !userDataEntry.data) {
                    return res
                        .status(400)
                        .json({ error: 'Missing path, componentId, or data' })
                }

                // Optimize reference reading
                const createdAt = userDataEntry.createdAt;
                if (!createdAt) {
                    return res
                        .status(400)
                        .json({ error: 'Missing createdAt' })
                }

                // Check if a version with this createdAt already exists
                const existingEntry = await prisma.userData.findUnique({
                    where: {
                        path_componentId_userId_createdAt: {
                            path: userDataEntry.path,
                            componentId: userDataEntry.componentId,
                            userId: user.id,
                            createdAt
                        }
                    }
                })

                // If entry exists, decide whether to update based on timestamps
                if (existingEntry) {
                    logger.debug('Existing entry found, checking timestamps', {
                        existingId: existingEntry.id
                    })

                    // Convert incoming updatedAt to a number for comparison
                    const incomingUpdatedAt = typeof userDataEntry.updatedAt === 'string'
                        ? new Date(userDataEntry.updatedAt).getTime()
                        : Number(userDataEntry.updatedAt) || Date.now();

                    // Convert existing updatedAt to a number for comparison
                    const existingUpdatedAt = new Date(existingEntry.updatedAt).getTime();

                    // Only update if incoming version is newer
                    if (incomingUpdatedAt > existingUpdatedAt) {
                        logger.debug('Updating existing entry with newer data', {
                            incomingUpdatedAt,
                            existingUpdatedAt
                        })

                        const updatedData = await prisma.userData.update({
                            where: { id: existingEntry.id },
                            data: {
                                data: userDataEntry.data,
                                updatedAt: new Date()
                            }
                        });

                        // Format response to match client expectations
                        return res.status(200).json({
                            path: updatedData.path,
                            componentId: updatedData.componentId,
                            data: updatedData.data as QuestionDataJson,
                            createdAt: updatedData.createdAt,
                            updatedAt: new Date(updatedData.updatedAt).getTime(),
                            savedToRemote: true,
                            message: 'Data updated successfully'
                        });
                    } else {
                        logger.debug('Not updating as existing data is more recent', {
                            incomingUpdatedAt,
                            existingUpdatedAt
                        })

                        // Return existing data, but indicate it wasn't updated
                        return res.status(200).json({
                            path: existingEntry.path,
                            componentId: existingEntry.componentId,
                            data: existingEntry.data as QuestionDataJson,
                            createdAt: existingEntry.createdAt,
                            updatedAt: new Date(existingEntry.updatedAt).getTime(),
                            savedToRemote: true,
                            notUpdated: true,
                            message: 'Existing data is more recent'
                        });
                    }
                }
                // If no existing entry, create a new one
                else {
                    logger.debug('Creating new entry', {
                        path: userDataEntry.path,
                        componentId: userDataEntry.componentId
                    })

                    const newData = await prisma.userData.create({
                        data: {
                            path: userDataEntry.path,
                            componentId: userDataEntry.componentId,
                            data: userDataEntry.data,
                            userId: user.id,
                            createdAt,
                            updatedAt: new Date()
                        }
                    });

                    // Format response to match client expectations
                    return res.status(201).json({
                        path: newData.path,
                        componentId: newData.componentId,
                        data: newData.data as QuestionDataJson,
                        createdAt: newData.createdAt,
                        updatedAt: new Date(newData.updatedAt).getTime(),
                        savedToRemote: true,
                        message: 'Data created successfully'
                    });
                }

            default:
                logger.warn('Invalid method called', {
                    method: req.method
                })

                res.setHeader('Allow', ['GET', 'POST'])
                return res
                    .status(405)
                    .json({ error: `Method ${req.method} Not Allowed` })
        }
    } catch (error) {
        logger.error('UserData API Error:', {
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        })

        return res.status(500).json({
            error: 'Internal Server Error',
            message: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}