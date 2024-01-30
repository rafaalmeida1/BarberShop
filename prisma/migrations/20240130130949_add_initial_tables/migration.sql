/*
  Warnings:

  - You are about to drop the column `barberShopId` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `barberShopId` on the `service` table. All the data in the column will be lost.
  - Added the required column `barbershopId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barbershopId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_barberShopId_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_barberShopId_fkey`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `barberShopId`,
    ADD COLUMN `barbershopId` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `service` DROP COLUMN `barberShopId`,
    ADD COLUMN `barbershopId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_barbershopId_fkey` FOREIGN KEY (`barbershopId`) REFERENCES `Barbershop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_barbershopId_fkey` FOREIGN KEY (`barbershopId`) REFERENCES `Barbershop`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
