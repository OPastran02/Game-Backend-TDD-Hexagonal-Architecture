-- CreateTable
CREATE TABLE `accessories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `rarity` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `boost_attack` DOUBLE NOT NULL DEFAULT 0,
    `boost_defense` DOUBLE NOT NULL DEFAULT 0,
    `boost_hp` DOUBLE NOT NULL DEFAULT 0,
    `boost_sp_attack` DOUBLE NOT NULL DEFAULT 0,
    `boost_sp_defense` DOUBLE NOT NULL DEFAULT 0,
    `boost_speed` DOUBLE NOT NULL DEFAULT 0,
    `boost_farming` DOUBLE NOT NULL DEFAULT 0,
    `boost_steeling` DOUBLE NOT NULL DEFAULT 0,
    `boost_wooding` DOUBLE NOT NULL DEFAULT 0,
    `power_points` DOUBLE NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'accesory_null.png',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Player_Hero_Id` INTEGER NOT NULL,

    INDEX `Accessories_Player_Hero_Id_fkey`(`Player_Hero_Id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `castles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `guildId` INTEGER NOT NULL,
    `leaderId` INTEGER NOT NULL,

    UNIQUE INDEX `Castles_guildId_key`(`guildId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `furnitures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `castleId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `positionX` INTEGER NOT NULL,
    `positionY` INTEGER NOT NULL,
    `Avatar` VARCHAR(191) NOT NULL,

    INDEX `Furnitures_castleId_fkey`(`castleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guildmemberships` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `guildId` INTEGER NOT NULL,
    `playerId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `wood` INTEGER NOT NULL,
    `steel` INTEGER NOT NULL,
    `food` INTEGER NOT NULL,
    `gold` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `GuildMemberships_guildId_fkey`(`guildId`),
    INDEX `GuildMemberships_playerId_fkey`(`playerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guilds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `experience` INTEGER NOT NULL,
    `level` INTEGER NOT NULL,
    `wood` INTEGER NOT NULL,
    `steel` INTEGER NOT NULL,
    `food` INTEGER NOT NULL,
    `gold` INTEGER NOT NULL,
    `castleId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heroes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `world` VARCHAR(191) NULL,
    `gatchaCatchRate` INTEGER NULL,
    `avatar` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL,
    `rarityId` INTEGER NOT NULL,
    `natureId` INTEGER NOT NULL,
    `typeId` INTEGER NOT NULL,

    UNIQUE INDEX `Heroes_name_key`(`name`),
    INDEX `Heroes_natureId_fkey`(`natureId`),
    INDEX `Heroes_rarityId_fkey`(`rarityId`),
    INDEX `Heroes_typeId_fkey`(`typeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heroes_level` (
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

    INDEX `Heroes_Level_heroId_fkey`(`heroId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heroes_nature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT 'No description',
    `boost_attack` DOUBLE NOT NULL DEFAULT 0,
    `boost_defense` DOUBLE NOT NULL DEFAULT 0,
    `boost_hp` DOUBLE NOT NULL DEFAULT 0,
    `boost_sp_attack` DOUBLE NOT NULL DEFAULT 0,
    `boost_sp_defense` DOUBLE NOT NULL DEFAULT 0,
    `boost_speed` DOUBLE NOT NULL DEFAULT 0,
    `boost_farming` DOUBLE NOT NULL DEFAULT 0,
    `boost_steeling` DOUBLE NOT NULL DEFAULT 0,
    `boost_wooding` DOUBLE NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Heroes_Nature_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heroes_rarity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'rarity_Null.png',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Heroes_Rarity_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heroes_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT 'No description',

    UNIQUE INDEX `Heroes_Type_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_google` VARCHAR(191) NULL,
    `id_facebook` VARCHAR(191) NULL,
    `id_apple` VARCHAR(191) NULL,
    `mail` VARCHAR(191) NULL,
    `nickname` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NULL,
    `lastname` VARCHAR(191) NULL,
    `phrase` VARCHAR(191) NULL,
    `coins` INTEGER NOT NULL DEFAULT 100,
    `diamonds` INTEGER NOT NULL DEFAULT 100,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `level` INTEGER NOT NULL DEFAULT 1,
    `loginDays` INTEGER NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'avatar.jpg',
    `block_avatar` VARCHAR(191) NOT NULL DEFAULT 'm_avatar.jpg',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players_heroes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `playerId` INTEGER NOT NULL,
    `heroId` INTEGER NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 0,
    `experience` INTEGER NOT NULL DEFAULT 0,
    `id_placement` INTEGER NULL,
    `power_point` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Players_Heroes_heroId_fkey`(`heroId`),
    INDEX `Players_Heroes_playerId_fkey`(`playerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `players_wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exp_rarity` INTEGER NOT NULL,
    `exp_quantity` INTEGER NOT NULL DEFAULT 0,
    `playerId` INTEGER NOT NULL,

    INDEX `Players_Wallet_playerId_fkey`(`playerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `accessories` ADD CONSTRAINT `Accessories_Player_Hero_Id_fkey` FOREIGN KEY (`Player_Hero_Id`) REFERENCES `players_heroes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `furnitures` ADD CONSTRAINT `Furnitures_castleId_fkey` FOREIGN KEY (`castleId`) REFERENCES `castles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guildmemberships` ADD CONSTRAINT `GuildMemberships_guildId_fkey` FOREIGN KEY (`guildId`) REFERENCES `guilds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `guildmemberships` ADD CONSTRAINT `GuildMemberships_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_natureId_fkey` FOREIGN KEY (`natureId`) REFERENCES `heroes_nature`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_rarityId_fkey` FOREIGN KEY (`rarityId`) REFERENCES `heroes_rarity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes` ADD CONSTRAINT `Heroes_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `heroes_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heroes_level` ADD CONSTRAINT `Heroes_Level_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `heroes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players_heroes` ADD CONSTRAINT `Players_Heroes_heroId_fkey` FOREIGN KEY (`heroId`) REFERENCES `heroes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players_heroes` ADD CONSTRAINT `Players_Heroes_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `players_wallet` ADD CONSTRAINT `Players_Wallet_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
