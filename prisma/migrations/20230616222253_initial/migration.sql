/*
  Warnings:

  - Added the required column `horoscope` to the `heroes_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heroes_type` ADD COLUMN `horoscope` VARCHAR(191) NOT NULL;
