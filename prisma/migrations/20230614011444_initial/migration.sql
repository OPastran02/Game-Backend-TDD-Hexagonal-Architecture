/*
  Warnings:

  - Made the column `created_at` on table `availableheroes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `availableheroes` MODIFY `created_at` DATETIME(3) NOT NULL;
