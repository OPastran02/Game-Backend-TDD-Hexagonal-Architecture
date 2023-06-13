/*
  Warnings:

  - You are about to drop the `players_titles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gameId` to the `players_wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `players_titles` DROP FOREIGN KEY `Players_Title_playerId_fkey`;

-- AlterTable
ALTER TABLE `players_wallet` ADD COLUMN `gameId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `players_titles`;
