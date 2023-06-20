/*
  Warnings:

  - The primary key for the `stats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `heroId` on the `stats` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_raceId_fkey`;

-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_statsId_fkey`;

-- AlterTable
ALTER TABLE `heroes` MODIFY `statsId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `stats` DROP PRIMARY KEY,
    DROP COLUMN `heroId`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_statsId_fkey` FOREIGN KEY (`statsId`) REFERENCES `Stats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_raceId_fkey` FOREIGN KEY (`raceId`) REFERENCES `Race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
