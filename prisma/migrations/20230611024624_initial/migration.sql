/*
  Warnings:

  - You are about to drop the column `block_avatar` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `id_apple` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `id_facebook` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `id_google` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `players` table. All the data in the column will be lost.
  - You are about to drop the column `last_login` on the `players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `players` DROP COLUMN `block_avatar`,
    DROP COLUMN `id_apple`,
    DROP COLUMN `id_facebook`,
    DROP COLUMN `id_google`,
    DROP COLUMN `is_active`,
    DROP COLUMN `last_login`,
    ADD COLUMN `appleId` VARCHAR(191) NULL,
    ADD COLUMN `avatarBlock` VARCHAR(191) NOT NULL DEFAULT 'm_avatar.jpg',
    ADD COLUMN `facebookId` VARCHAR(191) NULL,
    ADD COLUMN `googleId` VARCHAR(191) NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `lastLogin` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
