-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 09, 2013 at 11:22 AM
-- Server version: 5.5.9
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `football`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `cards_id` int(11) NOT NULL AUTO_INCREMENT,
  `yellow` int(11) DEFAULT '0',
  `red` int(11) DEFAULT '0',
  `player` int(11) DEFAULT NULL,
  PRIMARY KEY (`cards_id`),
  KEY `FK_card_player` (`player`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` VALUES(1, 3, 1, 1);
INSERT INTO `cards` VALUES(2, 0, 1, 2);
INSERT INTO `cards` VALUES(3, 2, 2, 3);
INSERT INTO `cards` VALUES(4, 2, 1, 4);
INSERT INTO `cards` VALUES(5, 2, 1, 5);
INSERT INTO `cards` VALUES(6, 12, 1, 6);


-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `club` varchar(45) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `players`
--

INSERT INTO `players` VALUES(1, 'Lex', 'Immers', 'Feyenoord', NULL);
INSERT INTO `players` VALUES(2, 'Colin', 'Kazim Richards', 'Feyenoord', NULL);
INSERT INTO `players` VALUES(3, 'Sonny', 'Stevens', 'FC Twente', NULL);
INSERT INTO `players` VALUES(4, 'Ricardo', 'Kishna', 'Ajax', NULL);
INSERT INTO `players` VALUES(5, 'Viktor', 'Fischer', 'Ajax', NULL);
INSERT INTO `players` VALUES(6, 'Aron', 'Johannsson', 'AZ', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `FK_card_player` FOREIGN KEY (`player`) REFERENCES `players` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
