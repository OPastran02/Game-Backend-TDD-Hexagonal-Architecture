-- AlterTable
ALTER TABLE `players` ADD COLUMN `hasBattlePass` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `hasYearPass` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `players_Titles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `available` BOOLEAN NOT NULL,
    `playerId` VARCHAR(191) NOT NULL,

    INDEX `Players_Titles_playerId_fkey`(`playerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `players_Titles` ADD CONSTRAINT `Players_Title_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
