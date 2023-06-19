/*
  Warnings:

  - Added the required column `available` to the `AvailableHeroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `raceId` to the `AvailableHeroes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `availableheroes` ADD COLUMN `available` BOOLEAN NOT NULL,
    ADD COLUMN `raceId` INTEGER NOT NULL;
