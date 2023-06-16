/*
  Warnings:

  - Added the required column `avatar` to the `heroes_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heroes_type` ADD COLUMN `avatar` VARCHAR(191) NOT NULL;
