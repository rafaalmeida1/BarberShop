/*
  Warnings:

  - Made the column `imageUrl` on table `service` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `service` MODIFY `imageUrl` VARCHAR(191) NOT NULL;
