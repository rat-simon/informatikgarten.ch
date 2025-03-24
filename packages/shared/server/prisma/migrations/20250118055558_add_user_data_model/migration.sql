/*
  Warnings:

  - You are about to drop the `user_answers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_answers" DROP CONSTRAINT "user_answers_userId_fkey";

-- DropTable
DROP TABLE "user_answers";

-- CreateTable
CREATE TABLE "user_data" (
    "id" TEXT NOT NULL,
    "path" VARCHAR(255) NOT NULL,
    "componentId" VARCHAR(255) NOT NULL,
    "userId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "user_data_path_componentId_idx" ON "user_data"("path", "componentId");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_path_componentId_userId_key" ON "user_data"("path", "componentId", "userId");

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
