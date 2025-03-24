/*
  Warnings:

  - A unique constraint covering the columns `[path,componentId,userId,createdAt]` on the table `user_data` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_data_path_componentId_userId_key";

-- AlterTable
ALTER TABLE "user_data" ALTER COLUMN "path" SET DATA TYPE TEXT,
ALTER COLUMN "componentId" SET DATA TYPE TEXT,
ALTER COLUMN "data" DROP NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "createdAt" SET DATA TYPE TEXT;

-- CreateIndex
CREATE INDEX "user_data_userId_idx" ON "user_data"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_path_componentId_userId_createdAt_key" ON "user_data"("path", "componentId", "userId", "createdAt");
