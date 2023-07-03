/*
  Warnings:

  - Added the required column `modifier` to the `boxRatio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `boxratio` ADD COLUMN `modifier` INTEGER NOT NULL;
