/*
  Warnings:

  - Made the column `created_at` on table `heroes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `heroes` MODIFY `created_at` DATETIME(3) NOT NULL;
