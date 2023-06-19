/*
  Warnings:

  - Added the required column `raceId` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `heroes` ADD COLUMN `raceId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `heroes_race` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Heroes_statsId_fkey` ON `heroes`(`statsId`);

-- CreateIndex
CREATE INDEX `Heroes_raceId_fkey` ON `heroes`(`raceId`);

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_raceId_fkey` FOREIGN KEY (`typeId`) REFERENCES `heroes_race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
