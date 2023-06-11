/*
  Warnings:

  - Added the required column `created_at` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `created_at` DATETIME(3) NOT NULL;
