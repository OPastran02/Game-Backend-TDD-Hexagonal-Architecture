/*
  Warnings:

  - The primary key for the `heroes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `exp_needed` on the `heroes_stats` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `heroes_stats` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `players_heroes` DROP FOREIGN KEY `Players_Heroes_heroId_fkey`;

-- AlterTable
ALTER TABLE `heroes` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `heroes_stats` DROP COLUMN `exp_needed`,
    DROP COLUMN `level`;

-- AlterTable
ALTER TABLE `players_heroes` MODIFY `heroId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `heroes_Available` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `world` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `rarityId` INTEGER NOT NULL,
    `natureId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,
    `attackMin` DOUBLE NOT NULL DEFAULT 0,
    `attackMax` DOUBLE NOT NULL DEFAULT 0,
    `defenseMin` DOUBLE NOT NULL DEFAULT 0,
    `defenseMax` DOUBLE NOT NULL DEFAULT 0,
    `hpMin` DOUBLE NOT NULL DEFAULT 0,
    `hpMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_attackMax` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseMin` DOUBLE NOT NULL DEFAULT 0,
    `sp_defenseMax` DOUBLE NOT NULL DEFAULT 0,
    `speedMin` DOUBLE NOT NULL DEFAULT 0,
    `speedMax` DOUBLE NOT NULL DEFAULT 0,
    `farmingMin` DOUBLE NOT NULL DEFAULT 0,
    `farmingMax` DOUBLE NOT NULL DEFAULT 0,
    `steelingMin` DOUBLE NOT NULL DEFAULT 0,
    `steelingMax` DOUBLE NOT NULL DEFAULT 0,
    `woodingMin` DOUBLE NOT NULL DEFAULT 0,
    `woodingMax` DOUBLE NOT NULL DEFAULT 0,
    `catchRate` DOUBLE NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `players_heroes` ADD CONSTRAINT `Players_Heroes_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `heroes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
