-- MySQL dump 10.13  Distrib 5.5.40, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: shouldreadme
-- ------------------------------------------------------
-- Server version	5.5.40-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FAQ_question`
--

DROP TABLE IF EXISTS `FAQ_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `FAQ_question` (
  `FAQ_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `answer` varchar(100) NOT NULL,
  `icon` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`),
  KEY `FAQ_id` (`FAQ_id`),
  CONSTRAINT `FAQ_question_ibfk_1` FOREIGN KEY (`FAQ_id`) REFERENCES `frequent_asked` (`FAQ_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAQ_question`
--

LOCK TABLES `FAQ_question` WRITE;
/*!40000 ALTER TABLE `FAQ_question` DISABLE KEYS */;
/*!40000 ALTER TABLE `FAQ_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fineprint`
--

DROP TABLE IF EXISTS `fineprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fineprint` (
  `print_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`print_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fineprint`
--

LOCK TABLES `fineprint` WRITE;
/*!40000 ALTER TABLE `fineprint` DISABLE KEYS */;
/*!40000 ALTER TABLE `fineprint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fineprint_FAQ`
--

DROP TABLE IF EXISTS `fineprint_FAQ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fineprint_FAQ` (
  `print_id` int(11) NOT NULL,
  `FAQ_id` int(11) NOT NULL,
  PRIMARY KEY (`FAQ_id`,`print_id`),
  KEY `print_id` (`print_id`),
  CONSTRAINT `fineprint_FAQ_ibfk_1` FOREIGN KEY (`FAQ_id`) REFERENCES `frequent_asked` (`FAQ_id`),
  CONSTRAINT `fineprint_FAQ_ibfk_2` FOREIGN KEY (`print_id`) REFERENCES `fineprint` (`print_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fineprint_FAQ`
--

LOCK TABLES `fineprint_FAQ` WRITE;
/*!40000 ALTER TABLE `fineprint_FAQ` DISABLE KEYS */;
/*!40000 ALTER TABLE `fineprint_FAQ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fineprint_icon`
--

DROP TABLE IF EXISTS `fineprint_icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fineprint_icon` (
  `print_id` int(11) NOT NULL,
  `icon_id` int(11) NOT NULL,
  `color` varchar(8) DEFAULT NULL,
  `used_type` varchar(32) DEFAULT NULL,
  `user_description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`icon_id`,`print_id`),
  KEY `print_id` (`print_id`),
  CONSTRAINT `fineprint_icon_ibfk_1` FOREIGN KEY (`icon_id`) REFERENCES `icon` (`icon_id`),
  CONSTRAINT `fineprint_icon_ibfk_2` FOREIGN KEY (`print_id`) REFERENCES `fineprint` (`print_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fineprint_icon`
--

LOCK TABLES `fineprint_icon` WRITE;
/*!40000 ALTER TABLE `fineprint_icon` DISABLE KEYS */;
/*!40000 ALTER TABLE `fineprint_icon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fineprint_quiz`
--

DROP TABLE IF EXISTS `fineprint_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fineprint_quiz` (
  `print_id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  PRIMARY KEY (`print_id`,`quiz_id`),
  KEY `quiz_id` (`quiz_id`),
  CONSTRAINT `fineprint_quiz_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`),
  CONSTRAINT `fineprint_quiz_ibfk_2` FOREIGN KEY (`print_id`) REFERENCES `fineprint` (`print_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fineprint_quiz`
--

LOCK TABLES `fineprint_quiz` WRITE;
/*!40000 ALTER TABLE `fineprint_quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `fineprint_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frequent_asked`
--

DROP TABLE IF EXISTS `frequent_asked`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `frequent_asked` (
  `FAQ_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`FAQ_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frequent_asked`
--

LOCK TABLES `frequent_asked` WRITE;
/*!40000 ALTER TABLE `frequent_asked` DISABLE KEYS */;
/*!40000 ALTER TABLE `frequent_asked` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `icon`
--

DROP TABLE IF EXISTS `icon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `icon` (
  `icon_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `tip_description` varchar(100) DEFAULT NULL,
  `tooltip` varchar(32) DEFAULT NULL,
  `file_name` varchar(32) NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `status` enum('positive','negative','general') DEFAULT 'general',
  PRIMARY KEY (`icon_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `icon`
--

LOCK TABLES `icon` WRITE;
/*!40000 ALTER TABLE `icon` DISABLE KEYS */;
/*!40000 ALTER TABLE `icon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz` (
  `quiz_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `offer` varchar(100) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`quiz_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_question`
--

DROP TABLE IF EXISTS `quiz_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quiz_question` (
  `quiz_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(100) NOT NULL,
  `answer` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`question_id`),
  KEY `quiz_id` (`quiz_id`),
  CONSTRAINT `quiz_question_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_question`
--

LOCK TABLES `quiz_question` WRITE;
/*!40000 ALTER TABLE `quiz_question` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(32) NOT NULL,
  `last_name` varchar(32) NOT NULL,
  `website` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(128) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_fineprint`
--

DROP TABLE IF EXISTS `user_fineprint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_fineprint` (
  `user_id` int(11) NOT NULL,
  `print_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`print_id`),
  KEY `print_id` (`print_id`),
  CONSTRAINT `user_fineprint_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `user_fineprint_ibfk_2` FOREIGN KEY (`print_id`) REFERENCES `fineprint` (`print_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_fineprint`
--

LOCK TABLES `user_fineprint` WRITE;
/*!40000 ALTER TABLE `user_fineprint` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_fineprint` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-07  2:47:00
