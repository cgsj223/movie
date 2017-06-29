-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: myMovie
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `time` varchar(20) NOT NULL,
  `uid` int(11) NOT NULL,
  `mid` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `title` varchar(45) NOT NULL,
  `director` varchar(40) NOT NULL,
  `actors` varchar(40) NOT NULL,
  `year` varchar(10) NOT NULL,
  `rating` varchar(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg','肖申克的救赎','弗兰克·德拉邦特','蒂姆·罗宾斯,摩根·弗里曼,鲍勃·冈顿','1994','9.6'),(2,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p511118051.jpg','这个杀手不太冷','吕克·贝松','让·雷诺,娜塔莉·波特曼,加里·奥德曼','1994','9.4'),(3,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910813120.jpg','霸王别姬','陈凯歌','张国荣,张丰毅,巩俐','1993','9.5'),(4,'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p510876377.jpg','阿甘正传','罗伯特·泽米吉斯','汤姆·汉克斯,罗宾·怀特,加里·西尼斯','1994','9.4'),(5,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p510861873.jpg','美丽人生','罗伯托·贝尼尼','罗伯托·贝尼尼,尼可莱塔·布拉斯基,乔治·坎塔里尼','1997','9.5'),(6,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910830216.jpg','千与千寻','宫崎骏','柊瑠美,入野自由,夏木真理','2001','9.2'),(7,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p492406163.jpg','辛德勒的名单','史蒂文·斯皮尔伯格','连姆·尼森,本·金斯利,拉尔夫·费因斯','1993','9.4'),(8,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p457760035.jpg','泰坦尼克号','詹姆斯·卡梅隆','莱昂纳多·迪卡普里奥,凯特·温丝莱特,比利·赞恩','1997','9.2'),(9,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p513344864.jpg','盗梦空间','克里斯托弗·诺兰','莱昂纳多·迪卡普里奥,约瑟夫·高登-莱维特,艾伦·佩吉','2010','9.2'),(10,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p449665982.jpg','机器人总动员','安德鲁·斯坦顿','本·贝尔特,艾丽莎·奈特,杰夫·格尔林','2008','9.3'),(11,'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p511146957.jpg','海上钢琴师','朱塞佩·托纳多雷','蒂姆·罗斯,普路特·泰勒·文斯,比尔·努恩','1998','9.2'),(12,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p579729551.jpg','三傻大闹宝莱坞','拉吉库马尔·希拉尼','阿米尔·汗,卡琳娜·卡普尔,马达范','2009','9.1'),(13,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p524964016.jpg','忠犬八公的故事','拉斯·霍尔斯道姆','理查·基尔,萨拉·罗默尔,琼·艾伦','2009','9.2'),(14,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910824951.jpg','放牛班的春天','克里斯托夫·巴拉蒂','杰拉尔·朱诺,让-巴蒂斯特·莫尼耶,弗朗索瓦·贝莱昂','2004','9.2'),(15,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455050536.jpg','大话西游之大圣娶亲','刘镇伟','周星驰,吴孟达,朱茵','1995','9.2'),(16,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1853232210.jpg','教父','弗朗西斯·福特·科波拉','马龙·白兰度,阿尔·帕西诺,詹姆斯·肯恩','1972','9.2'),(17,'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p1910829638.jpg','龙猫','宫崎骏','日高法子,坂本千夏,岛本须美','1988','9.1'),(18,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p479682972.jpg','楚门的世界','彼得·威尔','金·凯瑞,劳拉·琳妮,艾德·哈里斯','1998','9'),(19,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1963126880.jpg','乱世佳人','维克多·弗莱明,乔治·库克,山姆·伍德','托马斯·米切尔,芭芭拉·欧内尔,费雯·丽','1939','9.2'),(20,'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910901025.jpg','天堂电影院','朱塞佩·托纳多雷','安东娜拉·塔莉,恩佐·卡拉瓦勒,艾萨·丹尼埃利','1988','9.1');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(65) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-29 20:47:18
