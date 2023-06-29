-- CreateTable
CREATE TABLE `PlayerWorld` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idPlayer` VARCHAR(191) NOT NULL,
    `idWorld` INTEGER NOT NULL,
    `MundoAvatar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `World` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `race` INTEGER NOT NULL,
    `chapter` INTEGER NOT NULL,
    `MundoAvatar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reward` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mundoId` INTEGER NOT NULL,
    `item` INTEGER NOT NULL,
    `quantity` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Waves` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mundoId` INTEGER NOT NULL,
    `wave` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mobs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `waveId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `attack` INTEGER NOT NULL DEFAULT 0,
    `defense` INTEGER NOT NULL DEFAULT 0,
    `hp` INTEGER NOT NULL DEFAULT 0,
    `sp_attack` INTEGER NOT NULL DEFAULT 0,
    `sp_defense` INTEGER NOT NULL DEFAULT 0,
    `speed` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PlayerWorld` ADD CONSTRAINT `PlayerWorld_idPlayer_fkey` FOREIGN KEY (`idPlayer`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PlayerWorld` ADD CONSTRAINT `PlayerWorld_idWorld_fkey` FOREIGN KEY (`idWorld`) REFERENCES `World`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
