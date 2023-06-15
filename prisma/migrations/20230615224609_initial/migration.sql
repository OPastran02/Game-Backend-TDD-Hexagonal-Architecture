/*
  Warnings:

  - You are about to drop the column `Player_Hero_Id` on the `accessories` table. All the data in the column will be lost.
  - You are about to drop the `players_heroes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Experience` to the `heroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_placement` to the `heroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `heroes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `heroes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `accessories` DROP FOREIGN KEY `Accessories_Player_Hero_Id_fkey`;

-- DropForeignKey
ALTER TABLE `players_heroes` DROP FOREIGN KEY `Players_Heroes_heroId_fkey`;

-- DropForeignKey
ALTER TABLE `players_heroes` DROP FOREIGN KEY `Players_Heroes_playerId_fkey`;

-- AlterTable
ALTER TABLE `accessories` DROP COLUMN `Player_Hero_Id`;

-- AlterTable
ALTER TABLE `heroes` ADD COLUMN `Experience` INTEGER NOT NULL,
    ADD COLUMN `id_placement` INTEGER NOT NULL,
    ADD COLUMN `level` INTEGER NOT NULL,
    ADD COLUMN `playerId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `players_heroes`;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Players_HeroesId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
