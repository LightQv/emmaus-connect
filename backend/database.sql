SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema emmaus_connect
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emmaus_connect` DEFAULT CHARACTER SET utf8 ;
USE `emmaus_connect` ;

-- -----------------------------------------------------
-- Table `emmaus_connect`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `hashed_password` VARCHAR(100) NOT NULL,
  `role` VARCHAR(45) NOT NULL DEFAULT 'User',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO user (name, email, hashed_password, role) VALUES 
("Pierre Labbé", "labbepierre@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw", "Admin"),
("Lucie Chev", "luciechev@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw", "User");
-- -----------------------------------------------------
-- Table `emmaus_connect`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `coef` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO brand (name, coef) VALUES ("Apple", 1.1), ("Samsung", 1.2), ("Xiamo", 1.05);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`model`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`model` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `coef` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO model (name, coef) VALUES ("Iphone 12", 1.2), ("Iphone X", 1.0), ("Galaxy S20", 1.2), ("Galaxy Fold", 1.3), ("Note 11", 1.0), ("Note 12", 1.1);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`ram`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`ram` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `capacity` INT NOT NULL,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO ram (capacity, value) VALUES (2, 30), (4, 50), (6, 60), (8, 70), (12, 80), (16, 90);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`storage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`storage` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `capacity` INT NOT NULL,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO storage (capacity, value) VALUES (16, 30), (32, 40), (64, 50), (128, 60), (256, 80), (512, 100), (1000, 120);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`colour`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`colour` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `coef` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO colour (name, coef) VALUES ("Noir", 1.3), ("Blanc", 1.2), ("Gris/Argenté", 1.2), ("Autre", 1.0);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`state` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(45) NOT NULL,
  `weighting` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO state (state, weighting) VALUES ("DEEE", -100), ("Réparable", -50), ("Bloqué", -20), ("Reconditionnable", -10), ("Reconditionné", 0);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`network`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`network` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(5) NOT NULL,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO network (name, value) VALUES ("4G", 30), ("4G+", 40), ("5G", 50);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`screen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`screen` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `size` INT NOT NULL,
  `value` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO screen (size, value) VALUES (4, 20), (5, 40), (6, 60), (7, 80);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(2) NOT NULL,
  `val_min` INT NOT NULL,
  `val_max` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO categories (name, val_min, val_max) VALUES ("C", 0, 200), ("B", 201, 279), ("A", 280, 374), ("S", 375, 999);
-- -----------------------------------------------------
-- Table `emmaus_connect`.`price_index`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emmaus_connect`.`price_index` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(3,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO price_index (price) VALUES (0.25);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
