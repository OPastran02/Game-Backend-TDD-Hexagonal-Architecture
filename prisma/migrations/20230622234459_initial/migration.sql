/*
  Warnings:

  - Added the required column `idAvailableHero` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heroes` ADD COLUMN `idAvailableHero` INTEGER NOT NULL;
