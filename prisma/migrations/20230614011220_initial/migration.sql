/*
  Warnings:

  - You are about to drop the `heroes_available` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `heroes_stats` ADD COLUMN `attackBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `defenseBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `farmingBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `hpBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `sp_attackBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `sp_defenseBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `speedBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `steelingBst` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `woodingBst` DOUBLE NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `heroes_available`;

-- CreateTable
CREATE TABLE `AvailableHeroes` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `world` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `avatarBlock` VARCHAR(191) NOT NULL,
    `rarityId` INTEGER NOT NULL,
    `natureId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `attackMin` DOUBLE NOT NULL DEFAULT 0,
    `attackMax` DOUBLE NOT NULL DEFAULT 0,
    `attackBstMin` DOUBLE NOT NULL DEFAULT 0,
    `attackBstMax` DOUBLE NOT NULL DEFAULT 0,
    `defenseMin` DOUBLE NOT NULL DEFAULT 0,
    `defenseMax` DOUBLE NOT NULL DEFAULT 0,
    `defenseBstMin` DOUBLE NOT NULL DEFAULT 0,
    `defenseBstMax` DOUBLE NOT NULL DEFAULT 0,
    `hpMin` DOUBLE NOT NULL DEFAULT 0,
    `hpMax` DOUBLE NOT NULL DEFAULT 0,
    `hpBstMin` DOUBLE NOT NULL DEFAULT 0,
    `hpBstMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackBstMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackBstMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseBstMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseBstMax` DOUBLE NOT NULL DEFAULT 0,
    `speedMin` DOUBLE NOT NULL DEFAULT 0,
    `speedMax` DOUBLE NOT NULL DEFAULT 0,
    `speedBstMin` DOUBLE NOT NULL DEFAULT 0,
    `speedBstMax` DOUBLE NOT NULL DEFAULT 0,
    `farmingMin` DOUBLE NOT NULL DEFAULT 0,
    `farmingMax` DOUBLE NOT NULL DEFAULT 0,
    `farmingBstMin` DOUBLE NOT NULL DEFAULT 0,
    `farmingBstMax` DOUBLE NOT NULL DEFAULT 0,
    `steelingMin` DOUBLE NOT NULL DEFAULT 0,
    `steelingMax` DOUBLE NOT NULL DEFAULT 0,
    `steelingBstMin` DOUBLE NOT NULL DEFAULT 0,
    `steelingBstMax` DOUBLE NOT NULL DEFAULT 0,
    `woodingMin` DOUBLE NOT NULL DEFAULT 0,
    `woodingMax` DOUBLE NOT NULL DEFAULT 0,
    `woodingBstMin` DOUBLE NOT NULL DEFAULT 0,
    `woodingBstMax` DOUBLE NOT NULL DEFAULT 0,
    `catchRate` DOUBLE NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
