-- AlterTable
ALTER TABLE `players` ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `last_login` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` INTEGER NOT NULL,
    `ProductId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RedefineIndex
CREATE UNIQUE INDEX `Player_TerrainId_fkey` ON `Terrain`(`playerId`);
DROP INDEX `Terrain_playerId_key` ON `terrain`;
