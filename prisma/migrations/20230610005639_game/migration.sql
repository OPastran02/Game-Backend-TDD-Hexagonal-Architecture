/*
  Warnings:

  - Added the required column `quantityPlayers` to the `guilds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `guilds` ADD COLUMN `quantityPlayers` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Terrain` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `playerId` INTEGER NOT NULL,

    UNIQUE INDEX `Terrain_playerId_key`(`playerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Houses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `TerrainId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `positionX` INTEGER NOT NULL,
    `positionY` INTEGER NOT NULL,
    `Avatar` VARCHAR(191) NOT NULL,

    INDEX `Houses_TerrainId_fkey`(`TerrainId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Houses` ADD CONSTRAINT `Houses_TerrainId_fkey` FOREIGN KEY (`TerrainId`) REFERENCES `Terrain`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
