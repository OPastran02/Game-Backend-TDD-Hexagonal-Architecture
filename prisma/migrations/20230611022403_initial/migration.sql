/*
  Warnings:

  - You are about to drop the column `ProductId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `orders` table. All the data in the column will be lost.
  - Added the required column `orderId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` DROP COLUMN `ProductId`,
    DROP COLUMN `created_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `orderId` INTEGER NOT NULL,
    ADD COLUMN `productId` INTEGER NOT NULL;
