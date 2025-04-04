import { logger, YearsHSLGradient } from '../../utils'
import { generateHash } from '../../utils'
import FeatherIcon from 'feather-icons-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { EditClassMembers } from './EditClassMembers'

type Class = {
    id: number
    name: string
    year: number
    hash: string
}

export const ClassesDashboard = () => {
    const [classes, setClasses] = useState<Class[] | null>(null)
    const [feedback, setFeedback] = useState<
        'success' | 'loading' | 'error' | null
    >(null)
    const [editClass, setEditClass] = useState<number | null>(null)
    const [editClassMembers, setEditClassMembers] = useState<number | null>(
        null
    )

    const newClassName = useRef<HTMLInputElement>(null)
    const newClassYear = useRef<HTMLInputElement>(null)
    const editClassName = useRef<HTMLInputElement>(null)
    const editClassYear = useRef<HTMLInputElement>(null)

    const Gradient = new YearsHSLGradient(
        2020,
        2030,
        'hsl(349, 71%, 60%)',
        'hsl(180, 100%, 42%)'
    )
    const fetchClasses = async () => {
        const classesResponse = await fetch('/api/classes?type=allClasses')

        if (classesResponse.ok) {
            const classesData = await classesResponse.json()
            setClasses(classesData)
        } else {
            logger.error('Failed to fetch classes')
        }
    }

    useEffect(() => {
        fetchClasses()
    }, [])

    const handleAddClass = async () => {
        if (!newClassName.current || !newClassYear.current) {
            return
        }

        setFeedback('loading')

        const response = await fetch('/api/classes?type=createClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                className: newClassName.current.value,
                classYear: newClassYear.current.value,
                classHash: generateHash()
            })
        })

        if (response.ok) {
            setFeedback('success')
            setTimeout(() => setFeedback(null), 2000)
            fetchClasses()
        } else {
            setFeedback('error')
            setTimeout(() => setFeedback(null), 2000)
            console.error('Failed to add class')
        }
    }

    const handleEditClass = async (cls: Class) => {
        if (!editClassName.current || !editClassYear.current) {
            return
        }

        setFeedback('loading')

        const response = await fetch('/api/classes?type=editClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                classId: cls.id,
                className: editClassName.current.value,
                classYear: editClassYear.current.value,
                classHash: cls.hash
            })
        })

        if (response.ok) {
            setFeedback('success')
            setTimeout(() => {
                setFeedback(null)
                setEditClass(null)
            }, 2000)
            fetchClasses()
        } else {
            setFeedback('error')
            setTimeout(() => setFeedback(null), 2000)
            console.error('Failed to update class')
        }
    }
    return (
        <div className="p-4">
            <h2>Meine Klassen</h2>
            <table className='w-full font-bold'>
                <thead>
                    <tr key="classes-header">
                        <th>Name</th>
                        <th>Jahr</th>
                        <th>Optionen</th>
                    </tr>
                </thead>
                <tbody>
                    {!classes && (
                        <tr key="loading-classes">
                            <td colSpan={100}>
                                <div className="flex justify-center items-center w-full">
                                    <span>Loading...</span>
                                </div>
                            </td>
                        </tr>
                    )}
                    {classes && classes.length === 0 && (
                        <tr key="no-classes">
                            <td colSpan={100}>
                                <div className="italic text-center w-full flex justify-center items-center">
                                    No classes yet.
                                </div>
                            </td>
                        </tr>
                    )}
                    {classes &&
                        classes.map(cls =>
                            cls.id !== editClass ? (
                                <Fragment key={cls.id}>
                                    <tr
                                        style={{
                                            backgroundColor: Gradient.getColor(
                                                cls.year,
                                                0.4
                                            )
                                        }}
                                    >
                                        <td className="p-2">{cls.name}</td>
                                        <td className="p-2">{cls.year}</td>
                                        <td className="p-2">
                                            <span className="inline-flex space-x-2">
                                                <a
                                                    onClick={() =>
                                                        setEditClass(cls.id)
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                    <FeatherIcon
                                                        icon="edit"
                                                        size={12}
                                                    />
                                                </a>
                                                <a
                                                    onClick={() =>
                                                        setEditClassMembers(
                                                            editClassMembers ===
                                                                null
                                                                ? cls.id
                                                                : null
                                                        )
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                    <FeatherIcon
                                                        icon="users"
                                                        size={12}
                                                        className={
                                                            cls.id ===
                                                            editClassMembers
                                                                ? 'text-blue-500'
                                                                : ''
                                                        }
                                                    />
                                                </a>
                                                <a title={cls.hash}>
                                                    <FeatherIcon
                                                        icon="link"
                                                        size={12}
                                                        className="cursor-pointer"
                                                    />
                                                </a>
                                            </span>
                                        </td>
                                    </tr>
                                    {cls.id === editClassMembers && (
                                        <EditClassMembers classId={cls.id} />
                                    )}
                                </Fragment>
                            ) : (
                                <tr
                                    className="border-t-white border-opacity-50"
                                    key={cls.id}
                                >
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Class Name"
                                            className="border rounded px-3 py-2 w-full"
                                            defaultValue={cls.name}
                                            ref={editClassName}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Class Year"
                                            className="border rounded px-3 py-2 w-full"
                                            defaultValue={cls.year}
                                            ref={editClassYear}
                                        />
                                    </td>
                                    <td>
                                        <div className="flex">
                                            <button
                                                onClick={() =>
                                                    handleEditClass(cls)
                                                }
                                                title="Update class"
                                                className={`flex items-center justify-center p-3 rounded transition-all duration-300 ${
                                                    feedback === 'loading'
                                                        ? 'bg-gray-300 text-gray-600'
                                                        : feedback === 'success'
                                                          ? 'bg-green-500 text-white'
                                                          : feedback === 'error'
                                                            ? 'bg-red-500 text-white'
                                                            : 'bg-blue-500 text-white'
                                                }`}
                                                disabled={
                                                    feedback === 'loading'
                                                }
                                            >
                                                {feedback === 'loading' ? (
                                                    <span>Loading...</span>
                                                ) : feedback === 'success' ? (
                                                    '✅'
                                                ) : feedback === 'error' ? (
                                                    '❌'
                                                ) : (
                                                    <FeatherIcon
                                                        icon="save"
                                                        size="16"
                                                    />
                                                )}
                                            </button>
                                            <button
                                                className="p-1 rounded"
                                                onClick={() =>
                                                    setEditClass(null)
                                                }
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )}
                    <tr
                        className="border-t-white border-opacity-50"
                        key="new-class"
                    >
                        <td>
                            <input
                                type="text"
                                placeholder="Class Name"
                                className="border rounded px-3 py-2 w-full"
                                ref={newClassName}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                placeholder="Class Year"
                                className="border rounded px-3 py-2 w-full"
                                defaultValue={2024}
                                ref={newClassYear}
                            />
                        </td>
                        <td>
                            <button
                                onClick={handleAddClass}
                                title="Add Class"
                                className={`flex items-center justify-center p-3 rounded transition-all duration-300 w-full ${
                                    editClass !== null || feedback === null
                                        ? 'bg-blue-500 text-white'
                                        : feedback === 'loading'
                                          ? 'bg-gray-300 text-gray-600'
                                          : feedback === 'success'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                }`}
                                disabled={!!editClass || feedback === 'loading'}
                            >
                                {editClass !== null || feedback === null ? (
                                    <>
                                        <FeatherIcon icon="users" size="16" />
                                        <FeatherIcon icon="plus" size="16" />
                                    </>
                                ) : feedback === 'loading' ? (
                                    <span>Loading...</span>
                                ) : feedback === 'success' ? (
                                    '✅'
                                ) : (
                                    '❌'
                                )}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ClassesDashboard
