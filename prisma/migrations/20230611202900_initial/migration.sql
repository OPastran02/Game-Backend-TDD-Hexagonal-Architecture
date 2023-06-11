/*
  Warnings:

  - The primary key for the `players` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `guildmemberships` DROP FOREIGN KEY `GuildMemberships_playerId_fkey`;

-- DropForeignKey
ALTER TABLE `players_heroes` DROP FOREIGN KEY `Players_Heroes_playerId_fkey`;

-- DropForeignKey
ALTER TABLE `players_wallet` DROP FOREIGN KEY `Players_Wallet_playerId_fkey`;

-- AlterTable
ALTER TABLE `guildmemberships` MODIFY `playerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `players` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `players_heroes` MODIFY `playerId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `players_wallet` MODIFY `playerId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `orders`;

-- AddForeignKey
ALTER TABLE `guildmemberships` ADD CONSTRAINT `GuildMemberships_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players_heroes` ADD CONSTRAINT `Players_Heroes_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players_wallet` ADD CONSTRAINT `Players_Wallet_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
