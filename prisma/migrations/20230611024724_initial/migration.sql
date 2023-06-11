/*
  Warnings:

  - You are about to drop the column `created_at` on the `players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `players` DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
