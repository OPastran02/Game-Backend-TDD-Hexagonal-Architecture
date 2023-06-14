/*
  Warnings:

  - Made the column `description` on table `availableheroes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `world` on table `availableheroes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `availableheroes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `availableheroes` MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `world` VARCHAR(191) NOT NULL,
    MODIFY `avatar` VARCHAR(191) NOT NULL;
