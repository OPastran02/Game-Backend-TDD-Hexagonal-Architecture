/*
  Warnings:

  - You are about to drop the `heroes_nature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `heroes_race` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `heroes_rarity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `heroes_stats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `heroes_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_natureId_fkey`;

-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_raceId_fkey`;

-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_rarityId_fkey`;

-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_statsId_fkey`;

-- DropForeignKey
ALTER TABLE `heroes` DROP FOREIGN KEY `Heroes_typeId_fkey`;

-- DropTable
DROP TABLE `heroes_nature`;

-- DropTable
DROP TABLE `heroes_race`;

-- DropTable
DROP TABLE `heroes_rarity`;

-- DropTable
DROP TABLE `heroes_stats`;

-- DropTable
DROP TABLE `heroes_type`;

-- CreateTable
CREATE TABLE `Stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `heroId` VARCHAR(191) NOT NULL,
    `attack` INTEGER NOT NULL DEFAULT 0,
    `defense` INTEGER NOT NULL DEFAULT 0,
    `hp` INTEGER NOT NULL DEFAULT 0,
    `sp_attack` INTEGER NOT NULL DEFAULT 0,
    `sp_defense` INTEGER NOT NULL DEFAULT 0,
    `speed` INTEGER NOT NULL DEFAULT 0,
    `farming` INTEGER NOT NULL DEFAULT 0,
    `steeling` INTEGER NOT NULL DEFAULT 0,
    `wooding` INTEGER NOT NULL DEFAULT 0,
    `attackBst` INTEGER NOT NULL DEFAULT 0,
    `defenseBst` INTEGER NOT NULL DEFAULT 0,
    `hpBst` INTEGER NOT NULL DEFAULT 0,
    `sp_attackBst` INTEGER NOT NULL DEFAULT 0,
    `sp_defenseBst` INTEGER NOT NULL DEFAULT 0,
    `speedBst` INTEGER NOT NULL DEFAULT 0,
    `farmingBst` INTEGER NOT NULL DEFAULT 0,
    `steelingBst` INTEGER NOT NULL DEFAULT 0,
    `woodingBst` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `power_points` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT 'No description',
    `boost_attack` INTEGER NOT NULL DEFAULT 0,
    `boost_defense` INTEGER NOT NULL DEFAULT 0,
    `boost_hp` INTEGER NOT NULL DEFAULT 0,
    `boost_sp_attack` INTEGER NOT NULL DEFAULT 0,
    `boost_sp_defense` INTEGER NOT NULL DEFAULT 0,
    `boost_speed` INTEGER NOT NULL DEFAULT 0,
    `boost_farming` INTEGER NOT NULL DEFAULT 0,
    `boost_steeling` INTEGER NOT NULL DEFAULT 0,
    `boost_wooding` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Heroes_Nature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rarity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'rarity_Null.png',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Heroes_Rarity_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Race` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `horoscope` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT 'No description',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_natureId_fkey` FOREIGN KEY (`natureId`) REFERENCES `Nature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_rarityId_fkey` FOREIGN KEY (`rarityId`) REFERENCES `Rarity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_statsId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Stats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_raceId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
