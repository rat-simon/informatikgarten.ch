/*
  Warnings:

  - You are about to drop the `item_attributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item_types` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "item_attributes" DROP CONSTRAINT "item_attributes_item_id_fkey";

-- DropForeignKey
ALTER TABLE "item_attributes" DROP CONSTRAINT "item_attributes_type_id_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_item_type_id_fkey";

-- DropTable
DROP TABLE "item_attributes";

-- DropTable
DROP TABLE "item_types";

-- DropTable
DROP TABLE "items";

-- CreateTable
CREATE TABLE "user_answers" (
    "id" SERIAL NOT NULL,
    "question_string" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "timestamp" BIGINT NOT NULL,

    CONSTRAINT "user_answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_answers" ADD CONSTRAINT "user_answers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
