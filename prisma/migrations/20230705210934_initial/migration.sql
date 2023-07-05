/*
  Warnings:

  - Added the required column `Crystal` to the `boxRatio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Diamonds` to the `boxRatio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coins` to the `boxRatio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boxratio` ADD COLUMN `Crystal` INTEGER NOT NULL,
    ADD COLUMN `Diamonds` INTEGER NOT NULL,
    ADD COLUMN `coins` INTEGER NOT NULL;
