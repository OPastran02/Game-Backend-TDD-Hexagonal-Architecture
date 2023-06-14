/*
  Warnings:

  - You are about to drop the column `gatchaCatchRate` on the `heroes` table. All the data in the column will be lost.
  - You are about to drop the `heroes_level` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `statsId` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `heroes_level` DROP FOREIGN KEY `Heroes_Level_heroId_fkey`;

-- AlterTable
ALTER TABLE `heroes` DROP COLUMN `gatchaCatchRate`,
    ADD COLUMN `statsId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `heroes_level`;

-- CreateTable
CREATE TABLE `heroes_stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `heroId` INTEGER NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 0,
    `attack` DOUBLE NOT NULL DEFAULT 0,
    `defense` DOUBLE NOT NULL DEFAULT 0,
    `hp` DOUBLE NOT NULL DEFAULT 0,
    `sp_attack` DOUBLE NOT NULL DEFAULT 0,
    `sp_defense` DOUBLE NOT NULL DEFAULT 0,
    `speed` DOUBLE NOT NULL DEFAULT 0,
    `farming` DOUBLE NOT NULL DEFAULT 0,
    `steeling` DOUBLE NOT NULL DEFAULT 0,
    `wooding` DOUBLE NOT NULL DEFAULT 0,
    `exp_needed` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `power_points` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_statsId_fkey` FOREIGN KEY (`typeId`) REFERENCES `heroes_stats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
