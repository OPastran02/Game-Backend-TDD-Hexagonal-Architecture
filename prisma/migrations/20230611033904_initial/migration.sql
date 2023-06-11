/*
  Warnings:

  - Made the column `mail` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `firstname` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phrase` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `appleId` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `facebookId` on table `players` required. This step will fail if there are existing NULL values in that column.
  - Made the column `googleId` on table `players` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `players` MODIFY `mail` VARCHAR(191) NOT NULL,
    MODIFY `firstname` VARCHAR(191) NOT NULL,
    MODIFY `lastname` VARCHAR(191) NOT NULL,
    MODIFY `phrase` VARCHAR(191) NOT NULL,
    MODIFY `appleId` VARCHAR(191) NOT NULL,
    MODIFY `facebookId` VARCHAR(191) NOT NULL,
    MODIFY `googleId` VARCHAR(191) NOT NULL;
