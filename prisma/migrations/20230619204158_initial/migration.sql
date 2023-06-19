/*
  Warnings:

  - Added the required column `isInQueue` to the `heroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderInGeneralTeam` to the `heroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderInRaceTeam` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heroes` ADD COLUMN `isInQueue` INTEGER NOT NULL,
    ADD COLUMN `orderInGeneralTeam` INTEGER NOT NULL,
    ADD COLUMN `orderInRaceTeam` INTEGER NOT NULL;
