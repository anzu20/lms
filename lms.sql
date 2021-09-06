CREATE DATABASE IF NOT EXISTS `lms`;
USE `lms`;

CREATE TABLE IF NOT EXISTS `api_users` (
  `id` int NOT NULL DEFAULT '0',
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='User table';

INSERT INTO `api_users` (`id`, `login`, `password`) VALUES
	(1, 'admin', '$2y$10$PEJoX4Fq6KUxwxvhg0b13.jhZdkNgLQom1wv2S1/Td6ioNwMsP17G');

CREATE TABLE IF NOT EXISTS `students` (
  `id` int NOT NULL,
  `login` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='List of students';

INSERT INTO `students` (`id`, `login`, `name`) VALUES
	(1, 'bigbutterfly925', 'Harper Martin'),
	(2, 'bigdog309', 'Beth Fleming'),
	(3, 'goldenwolf867', 'Amy Mendoza'),
	(4, 'blackfish829', 'Ann Johnston'),
	(5, 'organictiger572', 'Renee Steeves '),
	(6, 'crazyrabbit601', 'Connie Reid'),
	(7, 'purplemeercat978', 'Dianne Johnson'),
	(8, 'organicostrich635', 'Roberto Rodriguez'),
	(9, 'organicgorilla252', 'Joe Bennett'),
	(10, 'bigostrich767', 'Judith Garcia'),
	(11, 'happygorilla826', 'Anita Boyd'),
	(12, 'smallostrich782', 'Mike Dunn'),
	(13, 'bluewolf163', 'Harvey Freeman'),
	(14, 'tinytiger633', 'Denise Gray'),
	(15, 'organicduck223', 'Devon Murray'),
	(16, 'organicduck426', 'Danny Walker'),
	(17, 'crazydog221', 'Joshua Vargas'),
	(18, 'bluecat427', 'David Jones'),
	(19, 'crazypeacock942', 'Gerald Morrison'),
	(20, 'bigbird402', 'Susan Johnston'),
	(21, 'purpleleopard870', 'Brad Bowman'),
	(22, 'brownswan880', 'Terra Morales'),
	(23, 'silverswan112', 'Scarlett Taylor'),
	(24, 'goldenwolf772', 'Zachary Mitchell'),
	(25, 'smalldog809', 'Deanna Johnston');