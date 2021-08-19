-- CreateTable
CREATE TABLE `Commentary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191),
    `score` INTEGER NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `enable` BOOLEAN NOT NULL,
    `IDSpot` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `spotName` VARCHAR(191) NOT NULL,
    `locationX` DOUBLE NOT NULL,
    `locationY` DOUBLE NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191),
    `image` VARCHAR(191) NOT NULL,
    `enable` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191),
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Commentary` ADD FOREIGN KEY (`IDSpot`) REFERENCES `Spot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
