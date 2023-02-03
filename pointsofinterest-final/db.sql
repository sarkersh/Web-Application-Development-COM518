CREATE DATABASE  IF NOT EXISTS `webapi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webapi`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: webapi
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `poi_reviews`
--

DROP TABLE IF EXISTS `poi_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poi_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `poi_id` int DEFAULT NULL,
  `review` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poi_reviews`
--

LOCK TABLES `poi_reviews` WRITE;
/*!40000 ALTER TABLE `poi_reviews` DISABLE KEYS */;
INSERT INTO `poi_reviews` VALUES (1,733,'aaaaaaaaaaaaaaaaaaaaaaaa'),(2,3,'farepiojpo4r;kfm,vp'),(3,6,'Nice place for tourist.');
/*!40000 ALTER TABLE `poi_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poi_users`
--

DROP TABLE IF EXISTS `poi_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poi_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poi_users`
--

LOCK TABLES `poi_users` WRITE;
/*!40000 ALTER TABLE `poi_users` DISABLE KEYS */;
INSERT INTO `poi_users` VALUES (1,'tim','tim123'),(2,'kate','kate123');
/*!40000 ALTER TABLE `poi_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pointsofinterest`
--

DROP TABLE IF EXISTS `pointsofinterest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pointsofinterest` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `lon` float DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `description` text,
  `recommendations` int DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1087 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pointsofinterest`
--

LOCK TABLES `pointsofinterest` WRITE;
/*!40000 ALTER TABLE `pointsofinterest` DISABLE KEYS */;
INSERT INTO `pointsofinterest` VALUES (2,'test','test','test','test',1,1,'test',0),(3,'New York','city','USA','NY',-74,40.75,'A very interesting place',2),(4,'London','city','UK','London',-0.1,51.51,'A very interesting place',6),(5,'Oxford','city','UK','Oxfordshire',-1.25,51.75,'A very interesting place',1),(6,'Bath','city','UK','Somerset',-2.36,51.38,'A very interesting place',1),(7,'Paris','city','France','Paris',2.35,48.86,'A very interesting place',0),(8,'Rome','city','Italy','Rome',12.48,41.89,'A very interesting place',0),(9,'San Francisco','city','USA','California',-122.4,37.78,'A very interesting place',0),(10,'Los Angeles','city','USA','California',-118.2,34.05,'A very interesting place',0),(11,'Paderborn','city','Germany','Nordrhein_Westfalen',8.75,51.72,'A very interesting place',0),(12,'Hannover','city','Germany','Niedersachsen',9.74,52.38,'A very interesting place',0),(13,'Koeln','city','Germany','Nordrhein_Westfalen',6.96,50.94,'A very interesting place',0),(14,'Freiburg','city','Germany','Baden-Wuerttemberg',7.85,48,'A very interesting place',0),(15,'Garmisch-Partenkirchen','town','Germany','Bayern',11.1,47.49,'A very interesting place',0),(16,'Bergisch Gladbach','town','Germany','Nordrhein_Westfalen',7.13,50.99,'A very interesting place',0),(523,'Petersfield','town','UK','Hampshire',-0.937472,51.0038,'A very interesting place',0),(524,'Lyndhurst','town','UK','Hampshire',-1.57484,50.8728,'A very interesting place',0),(525,'New Milton','town','UK','Hampshire',-1.65519,50.7531,'A very interesting place',0),(526,'Southampton','city','UK','Hampshire',-1.4042,50.9035,'A very interesting place',0),(527,'Romsey','town','UK','Hampshire',-1.49973,50.9895,'A very interesting place',0),(528,'Hedge End','town','UK','Hampshire',-1.30714,50.9154,'A very interesting place',0),(529,'Hythe','town','UK','Hampshire',-1.40326,50.8694,'A very interesting place',0),(530,'Alton','town','UK','Hampshire',-0.972413,51.1456,'A very interesting place',0),(531,'Portsmouth','city','UK','Hampshire',-1.0744,50.8065,'A very interesting place',0),(532,'Ringwood','town','UK','Wiltshire',-1.79142,50.8469,'A very interesting place',0),(533,'Fordingbridge','town','UK','Wiltshire',-1.79235,50.9266,'A very interesting place',0),(534,'Havant','town','UK','Hampshire',-0.979901,50.8527,'A very interesting place',0),(535,'Andover','town','UK','Hampshire',-1.47935,51.2078,'A very interesting place',0),(536,'Farnborough','town','UK','Surrey',-0.756496,51.2941,'A very interesting place',1),(537,'Emsworth','town','UK','Hampshire',-0.937185,50.8449,'A very interesting place',0),(538,'Tadley','town','UK','Hampshire',-1.13834,51.3531,'A very interesting place',0),(539,'Waterlooville','town','UK','Hampshire',-1.03044,50.8803,'A very interesting place',0),(540,'Odiham','town','UK','Hampshire',-0.939688,51.2535,'A very interesting place',0),(541,'Hook','town','UK','Hampshire',-0.963113,51.2816,'A very interesting place',0),(542,'Eastleigh','town','UK','Hampshire',-1.35282,50.9676,'A very interesting place',0),(543,'South Hayling','town','UK','Hampshire',-0.974811,50.7864,'A very interesting place',0),(544,'Fleet','town','UK','Surrey',-0.83532,51.2749,'A very interesting place',0),(545,'Gosport','town','UK','Hampshire',-1.12649,50.793,'A very interesting place',0),(546,'Basingstoke','town','UK','Hampshire',-1.0862,51.2628,'A very interesting place',0),(547,'Bordon','town','UK','Surrey',-0.859336,51.1091,'A very interesting place',0),(548,'Whitchurch','town','UK','Hampshire',-1.33843,51.2299,'A very interesting place',0),(549,'Lymington','town','UK','Hampshire',-1.54269,50.7584,'A very interesting place',0),(550,'Blackwater','town','UK','Surrey',-0.77884,51.3306,'A very interesting place',0),(551,'Totton and Eling','town','UK','Hampshire',-1.49637,50.9177,'A very interesting place',0),(552,'Hartley Wintney','town','UK','Surrey',-0.899714,51.3062,'A very interesting place',0),(553,'Winchester','city','UK','Hampshire',-1.31355,51.0617,'A very interesting place',0),(554,'Chandlers Ford','town','UK','Hampshire',-1.38331,50.9828,'A very interesting place',0),(555,'Bishops Waltham','town','UK','Hampshire',-1.21801,50.9543,'A very interesting place',0),(556,'Aldershot','town','UK','Surrey',-0.756526,51.2519,'A very interesting place',0),(557,'New Alresford','town','UK','Hampshire',-1.15854,51.0854,'A very interesting place',0),(558,'Fareham','town','UK','Hampshire',-1.17925,50.854,'A very interesting place',0),(581,'Ludgershall','town','UK','Hampshire',-1.62337,51.257,'A very interesting place',0),(582,'Marlborough','town','UK','Wiltshire',-1.72895,51.421,'A very interesting place',0),(583,'Wilton','town','UK','Wiltshire',-1.8628,51.0804,'A very interesting place',0),(584,'Amesbury','town','UK','Wiltshire',-1.77511,51.1727,'A very interesting place',0),(585,'Devizes','town','UK','Wiltshire',-1.99266,51.3508,'A very interesting place',0),(586,'Salisbury','city','UK','Wiltshire',-1.79512,51.0737,'A very interesting place',0),(674,'Haslemere','town','UK','Sussex',-0.709777,51.0876,'A very interesting place',0),(675,'Woking','town','UK','Surrey',-0.556445,51.3202,'A very interesting place',0),(676,'Staines-upon-Thames','town','UK','Surrey',-0.511044,51.434,'A very interesting place',0),(677,'Farnham','town','UK','Surrey',-0.798015,51.2143,'A very interesting place',0),(678,'Godalming','town','UK','Surrey',-0.614907,51.1858,'A very interesting place',0),(679,'Camberley','town','UK','Surrey',-0.740629,51.3394,'A very interesting place',6),(680,'Egham','town','UK','Surrey',-0.547309,51.4313,'A very interesting place',0),(682,'Guildford','town','UK','Surrey',-0.565362,51.2353,'A very interesting place',0),(683,'Chertsey','town','UK','Surrey',-0.504125,51.3884,'A very interesting place',0),(732,'Littlehampton','town','UK','Sussex',-0.536691,50.8122,'A very interesting place',0),(733,'Petworth','town','UK','Sussex',-0.610109,50.9863,'A very interesting place',0),(734,'Midhurst','town','UK','Sussex',-0.742806,50.9819,'A very interesting place',0),(735,'Chichester','city','UK','Sussex',-0.778782,50.8367,'A very interesting place',0),(736,'Selsey','town','UK','Sussex',-0.79229,50.7328,'A very interesting place',0),(737,'Bognor Regis','town','UK','Sussex',-0.673072,50.7835,'A very interesting place',0),(738,'Arundel','town','UK','Sussex',-0.55345,50.8541,'A very interesting place',0),(739,'Vine Inn','pub','UK','Hampshire',-1.31197,50.8806,'A very interesting place',0),(740,'Fox and Hounds/Lone Barn','pub','UK','Hampshire',-1.31733,50.8829,'A very interesting place',0),(741,'Jolly Sailor','pub','UK','Hampshire',-1.3043,50.8818,'A very interesting place',0),(742,'Millers Pond','pub','UK','Hampshire',-1.36139,50.8977,'A very interesting place',0),(743,'White Swan','pub','UK','Hampshire',-1.36152,50.9381,'A very interesting place',0),(744,'Two Brothers','pub','UK','Hampshire',-1.35281,50.9326,'A very interesting place',0),(745,'The Royal Oak','pub','UK','Hampshire',-1.43167,50.8265,'A very interesting place',0),(746,'The Langley Tavern','pub','UK','Hampshire',-1.36811,50.8074,'A very interesting place',0),(747,'The Bridge','pub','UK','Hampshire',-1.39856,50.8259,'A very interesting place',0),(748,'Salmon Leap','pub','UK','Hampshire',-1.48754,50.9244,'A very interesting place',0),(749,'Cleveland Bay','pub','UK','Hampshire',-1.40201,50.9783,'A very interesting place',0),(750,'Fleming Arms','pub','UK','Hampshire',-1.37453,50.9423,'A very interesting place',0),(751,'Dog and Crook','pub','UK','Hampshire',-1.32791,50.9931,'A very interesting place',0),(752,'Stoneham Arms','pub','UK','Hampshire',-1.38775,50.9443,'A very interesting place',0),(753,'Travellers Rest','pub','UK','Hampshire',-1.3894,50.8553,'A very interesting place',0),(754,'The Forest Home','pub','UK','Hampshire',-1.39137,50.842,'A very interesting place',0),(755,'The Cottage','pub','UK','Hampshire',-1.34,50.88,'A very interesting place',0),(756,'The Roll Call','pub','UK','Hampshire',-1.33998,50.8811,'A very interesting place',0),(757,'The Swan','pub','UK','Hampshire',-1.3627,50.8957,'A very interesting place',0),(758,'Chamberlayne Arms','pub','UK','Hampshire',-1.35289,50.9052,'A very interesting place',0),(759,'The Manor','pub','UK','Hampshire',-1.37386,50.9007,'A very interesting place',0),(760,'Spike Islander','pub','UK','Hampshire',-1.35668,50.9028,'A very interesting place',0),(761,'Big Cheese','pub','UK','Hampshire',-1.35604,50.9207,'A very interesting place',0),(762,'Fox and Hounds','pub','UK','Hampshire',-1.35659,50.9181,'A very interesting place',0),(763,'The Obelisk','pub','UK','Hampshire',-1.37264,50.8943,'A very interesting place',0),(764,'Hare and Hounds','pub','UK','Hampshire',-1.33501,50.9197,'A very interesting place',0),(765,'The Rising Sun','pub','UK','Hampshire',-1.30588,50.8524,'A very interesting place',0),(766,'Stones','pub','UK','Hampshire',-1.35324,50.9683,'A very interesting place',0),(767,'Humble Plumb','pub','UK','Hampshire',-1.35371,50.9168,'A very interesting place',0),(768,'Peartree Inn','pub','UK','Hampshire',-1.37277,50.9043,'A very interesting place',0),(769,'Red Lion','pub','UK','Hampshire',-1.35828,50.9144,'A very interesting place',0),(770,'The Earl Of Locksley','pub','UK','Hampshire',-1.3596,50.904,'A very interesting place',0),(771,'Gardeners Arms','pub','UK','Hampshire',-1.35388,50.8915,'A very interesting place',0),(772,'The Ark','pub','UK','Hampshire',-1.35777,50.9292,'A very interesting place',0),(773,'The Cricketers','pub','UK','Hampshire',-1.37452,50.9614,'A very interesting place',0),(774,'The Sun Inn','pub','UK','Hampshire',-1.4854,50.9916,'A very interesting place',0),(775,'The Chamberlayne Arms','pub','UK','Hampshire',-1.35413,50.9661,'A very interesting place',0),(776,'The Grantham Arms','pub','UK','Hampshire',-1.35828,50.965,'A very interesting place',0),(777,'The Bent Brief','pub','UK','Hampshire',-1.39656,50.9197,'A very interesting place',0),(778,'The Litten Tree','pub','UK','Hampshire',-1.35329,50.9679,'A very interesting place',0),(779,'Percy Arms','pub','UK','Hampshire',-1.35407,50.9155,'A very interesting place',0),(780,'Good Companion','pub','UK','Hampshire',-1.35932,50.9697,'A very interesting place',0),(781,'Exford Arms','pub','UK','Hampshire',-1.34461,50.9175,'A very interesting place',0),(782,'Ham Farm Pub','pub','UK','Hampshire',-1.35087,50.9838,'A very interesting place',0),(783,'Ham Farm Harvester','restaurant','UK','Hampshire',-1.3505,50.984,'A very interesting place',0),(784,'Bishop Blaize','pub','UK','Hampshire',-1.49231,50.9894,'A very interesting place',0),(785,'Mono','pub','UK','Hampshire',-1.40464,50.9124,'A very interesting place',0),(786,'Orange Rooms','pub','UK','Hampshire',-1.40484,50.9123,'A very interesting place',0),(787,'The Pilgrim Inn','pub','UK','Hampshire',-1.4504,50.8846,'A very interesting place',0),(788,'The Anchor Inn','pub','UK','Hampshire',-1.48126,50.912,'A very interesting place',0),(789,'The Winston','pub','UK','Hampshire',-1.41503,50.9151,'A very interesting place',0),(790,'The Blue Keys','pub','UK','Hampshire',-1.41335,50.9162,'A very interesting place',0),(791,'The Bellemoor','pub','UK','Hampshire',-1.41625,50.9275,'A very interesting place',0),(792,'Chilworth Arms','pub','UK','Hampshire',-1.41718,50.9643,'A very interesting place',0),(793,'The Malvern','pub','UK','Hampshire',-1.42382,50.9319,'A very interesting place',0),(794,'Ice House','pub','UK','Hampshire',-1.43739,50.9279,'A very interesting place',0),(795,'Baddesley Arms','pub','UK','Hampshire',-1.43738,50.9777,'A very interesting place',0),(796,'The Platform Tavern','pub','UK','Hampshire',-1.40355,50.8964,'A very interesting place',0),(797,'The Mountbatten','pub','UK','Hampshire',-1.44906,50.9405,'A very interesting place',0),(798,'The Hop Inn','pub','UK','Hampshire',-1.37074,50.9327,'A very interesting place',0),(799,'The Queens Head','pub','UK','Hampshire',-1.30504,50.9856,'A very interesting place',0),(800,'The Bold Forester','pub','UK','Hampshire',-1.4654,50.8749,'A very interesting place',0),(801,'Anchor Inn','pub','UK','Hampshire',-1.47428,50.9218,'A very interesting place',0),(802,'The Hinkler','pub','UK','Hampshire',-1.33348,50.9077,'A very interesting place',0),(803,'The Bullseye','pub','UK','Hampshire',-1.34855,50.8986,'A very interesting place',0),(804,'Foresters Arms','pub','UK','Hampshire',-1.33119,50.9807,'A very interesting place',0),(805,'Longmead Arms','pub','UK','Hampshire',-1.33217,50.9765,'A very interesting place',0),(806,'Bald Faced Stag','pub','UK','Hampshire',-1.43132,50.918,'A very interesting place',0),(807,'The Old House at Home','pub','UK','Hampshire',-1.49548,50.99,'A very interesting place',0),(808,'William IV','pub','UK','Hampshire',-1.49784,50.9903,'A very interesting place',0),(809,'Wellington Arms','pub','UK','Hampshire',-1.42358,50.9124,'A very interesting place',0),(810,'The Freemantle','pub','UK','Hampshire',-1.42471,50.9134,'A very interesting place',0),(811,'Englishman','pub','UK','Hampshire',-1.43504,50.9184,'A very interesting place',0),(812,'Freemantle Arms','pub','UK','Hampshire',-1.42925,50.915,'A very interesting place',0),(813,'The Heath (Table Table)','pub','UK','Hampshire',-1.41705,50.8512,'A very interesting place',0),(814,'Bedes Lea','pub','UK','Hampshire',-1.4482,50.9762,'A very interesting place',0),(815,'Bricklayers Arms','pub','UK','Hampshire',-1.45476,50.924,'A very interesting place',0),(816,'The Ship','pub','UK','Hampshire',-1.47292,50.9211,'A very interesting place',0),(817,'Rising Sun','pub','UK','Hampshire',-1.31836,50.9974,'A very interesting place',0),(818,'Waterloo Arms','pub','UK','Hampshire',-1.42695,50.9113,'A very interesting place',0),(819,'Turfcutters Arms','pub','UK','Hampshire',-1.47021,50.8024,'A very interesting place',0),(821,'TGI Fridays','restaurant','UK','Hampshire',-1.41335,50.905,'A very interesting place',0),(822,'Ship Inn','pub','UK','Hampshire',-1.38045,50.8938,'A very interesting place',0),(823,'Frankie and Bennys','restaurant','UK','Hampshire',-1.35175,50.967,'A very interesting place',0),(824,'The Hunters','pub','UK','Hampshire',-1.46954,50.9986,'A very interesting place',0),(826,'Southampton Arms','pub','UK','Hampshire',-1.32057,50.9324,'A very interesting place',0),(827,'Prince Consort','pub','UK','Hampshire',-1.35279,50.8724,'A very interesting place',0),(828,'Zen','restaurant','UK','Hampshire',-1.40363,50.8994,'A very interesting place',0),(829,'The Red Lion','pub','UK','Hampshire',-1.40365,50.899,'A very interesting place',0),(830,'The Wagon Works','pub','UK','Hampshire',-1.35072,50.9695,'A very interesting place',0),(831,'Linden Tree','pub','UK','Hampshire',-1.31557,50.8886,'A very interesting place',0),(832,'The King Rufus','pub','UK','Hampshire',-1.47839,50.9074,'A very interesting place',0),(833,'The Village Bells','pub','UK','Hampshire',-1.4781,50.9073,'A very interesting place',0),(834,'King George','pub','UK','Hampshire',-1.44435,50.9216,'A very interesting place',0),(835,'Ennios','restaurant','UK','Hampshire',-1.40515,50.8968,'A very interesting place',0),(836,'La Regata','restaurant','UK','Hampshire',-1.40472,50.8967,'A very interesting place',0),(837,'The Manor House','pub','UK','Hampshire',-1.32754,50.8891,'A very interesting place',0),(838,'The Plough','pub','UK','Hampshire',-1.33021,50.8893,'A very interesting place',0),(839,'Grande CafÃƒÂ©','restaurant','UK','Hampshire',-1.39696,50.8975,'A very interesting place',0),(840,'La Cantina','restaurant','UK','Hampshire',-1.39273,50.8971,'A very interesting place',0),(841,'Gleneagles','pub','UK','Hampshire',-1.40555,50.8505,'A very interesting place',0),(842,'The Fitzhugh','pub','UK','Hampshire',-1.41,50.9146,'A very interesting place',0),(843,'Banana Wharf','restaurant','UK','Hampshire',-1.39084,50.8968,'A very interesting place',0),(844,'The Otter','pub','UK','Hampshire',-1.35408,50.9985,'A very interesting place',0),(845,'The Croft (Closed)','pub','UK','Hampshire',-1.40056,50.861,'A very interesting place',0),(846,'Sunrise Balti and Tandoori','restaurant','UK','Hampshire',-1.3764,50.9873,'A very interesting place',0),(847,'Nandos','restaurant','UK','Hampshire',-1.35199,50.9663,'A very interesting place',0),(848,'Windhover Manor','restaurant','UK','Hampshire',-1.31755,50.8948,'A very interesting place',0),(849,'The New Inn','pub','UK','Hampshire',-1.4969,50.907,'A very interesting place',0),(850,'Grove Tavern','pub','UK','Hampshire',-1.37777,50.8916,'A very interesting place',0),(851,'Firehouse','pub','UK','Hampshire',-1.40343,50.9048,'A very interesting place',0),(852,'Glen Bar','pub','UK','Hampshire',-1.40268,50.944,'A very interesting place',0),(853,'Regents Park','pub','UK','Hampshire',-1.44282,50.9158,'A very interesting place',0),(854,'Osbourne','pub','UK','Hampshire',-1.41873,50.9099,'A very interesting place',0),(855,'The Cricketers','pub','UK','Hampshire',-1.40498,50.9129,'A very interesting place',0),(856,'Key and Anchor','pub','UK','Hampshire',-1.42291,50.9093,'A very interesting place',0),(857,'Prezzo Romsey','restaurant','UK','Hampshire',-1.49592,50.9878,'A very interesting place',0),(858,'The Olive Tree','pub','UK','Hampshire',-1.49764,50.9895,'A very interesting place',0),(859,'Que Pasa','pub','UK','Hampshire',-1.40419,50.906,'A very interesting place',0),(860,'Yatess','pub','UK','Hampshire',-1.40471,50.9066,'A very interesting place',0),(861,'Namaste Kerala','restaurant','UK','Hampshire',-1.40495,50.907,'A very interesting place',0),(862,'The Stile','pub','UK','Hampshire',-1.42423,50.915,'A very interesting place',0),(863,'The Rover','pub','UK','Hampshire',-1.42554,50.916,'A very interesting place',0),(864,'Brass Monkey','pub','UK','Hampshire',-1.42916,50.9188,'A very interesting place',0),(866,'Table Table','restaurant','UK','Hampshire',-1.37371,50.9729,'A very interesting place',0),(867,'La Margherita','restaurant','UK','Hampshire',-1.40469,50.8957,'A very interesting place',0),(868,'The Hiltonbury Farmhouse','pub','UK','Hampshire',-1.39416,50.9955,'A very interesting place',0),(869,'Jolly Sailor','pub','UK','Hampshire',-1.33992,50.8271,'A very interesting place',0),(870,'Finicki Food Company','restaurant','UK','Hampshire',-1.41187,50.9086,'A very interesting place',0),(871,'Encore','pub','UK','Hampshire',-1.41074,50.9087,'A very interesting place',0),(872,'Aroma','restaurant','UK','Hampshire',-1.37968,50.8312,'A very interesting place',0),(873,'El Rancho','restaurant','UK','Hampshire',-1.40366,50.8992,'A very interesting place',0),(874,'The Standing Order (JD Wetherspoon)','pub','UK','Hampshire',-1.40377,50.9009,'A very interesting place',0),(875,'Bellinis','restaurant','UK','Hampshire',-1.3986,50.8978,'A very interesting place',0),(876,'The London Hotel','pub','UK','Hampshire',-1.39696,50.8979,'A very interesting place',0),(877,'Peking Phoenix','restaurant','UK','Hampshire',-1.35369,50.9693,'A very interesting place',0),(878,'Nashaa','restaurant','UK','Hampshire',-1.35383,50.9693,'A very interesting place',0),(879,'La Vista','restaurant','UK','Hampshire',-1.40148,50.873,'A very interesting place',0),(880,'The Tavern','pub','UK','Hampshire',-1.49776,50.9891,'A very interesting place',0),(881,'The Tudor Rose','pub','UK','Hampshire',-1.49926,50.9886,'A very interesting place',0),(882,'Thai Cottage','restaurant','UK','Hampshire',-1.38213,50.9825,'A very interesting place',0),(883,'The Ketch Rigger','pub','UK','Hampshire',-1.31169,50.8518,'A very interesting place',0),(884,'Boomerang','restaurant','UK','Hampshire',-1.31534,50.8589,'A very interesting place',0),(885,'Ye Olde Whyte Hart','pub','UK','Hampshire',-1.31668,50.8587,'A very interesting place',0),(886,'The Riverside Bar and Restaurant','pub','UK','Hampshire',-1.31259,50.8713,'A very interesting place',0),(887,'The Cinnamon Bay','restaurant','UK','Hampshire',-1.31902,50.8591,'A very interesting place',0),(888,'The Malt and Hops','pub','UK','Hampshire',-1.39846,50.8662,'A very interesting place',0),(889,'The Station','pub','UK','Hampshire',-1.37528,50.918,'A very interesting place',0),(890,'The Welcome Inn','pub','UK','Hampshire',-1.32216,50.9645,'A very interesting place',0),(891,'The New Clock Inn','pub','UK','Hampshire',-1.30655,50.9644,'A very interesting place',0),(892,'Unit Nightclub','pub','UK','Hampshire',-1.39923,50.9104,'A very interesting place',0),(893,'Capers','restaurant','UK','Hampshire',-1.41517,50.8527,'A very interesting place',0),(895,'Prezzo','restaurant','UK','Hampshire',-1.39848,50.8983,'A very interesting place',0),(896,'Saras','restaurant','UK','Hampshire',-1.39062,50.9271,'A very interesting place',0),(897,'The Victoria','pub','UK','Hampshire',-1.38049,50.8949,'A very interesting place',0),(898,'La Parissiene','restaurant','UK','Hampshire',-1.49963,50.988,'A very interesting place',0),(899,'Massala','restaurant','UK','Hampshire',-1.38006,50.8965,'A very interesting place',0),(900,'Pig n Whistle','pub','UK','Hampshire',-1.4209,50.9122,'A very interesting place',0),(901,'The Griffin','pub','UK','Hampshire',-1.43414,50.925,'A very interesting place',0),(902,'Shooting Star','pub','UK','Hampshire',-1.39588,50.9165,'A very interesting place',0),(903,'Giddy Bridge','pub','UK','Hampshire',-1.40448,50.911,'A very interesting place',0),(904,'Avondale House','pub','UK','Hampshire',-1.40394,50.9129,'A very interesting place',0),(905,'Plume of Feathers','pub','UK','Hampshire',-1.39688,50.9051,'A very interesting place',0),(906,'The Joiners','pub','UK','Hampshire',-1.39648,50.9045,'A very interesting place',0),(907,'Nicks Restaurant','restaurant','UK','Hampshire',-1.39957,50.9017,'A very interesting place',0),(908,'Park Hotel (closed long-term)','pub','UK','Hampshire',-1.42045,50.9114,'A very interesting place',0),(909,'Jewel in the Crown','restaurant','UK','Hampshire',-1.42655,50.9172,'A very interesting place',0),(910,'Pucchinis','restaurant','UK','Hampshire',-1.42735,50.9179,'A very interesting place',0),(911,'Kachina','restaurant','UK','Hampshire',-1.43059,50.9199,'A very interesting place',0),(912,'Spice of Life (B level)','restaurant','UK','Hampshire',-1.43428,50.933,'A very interesting place',0),(913,'Shield and Dagger','pub','UK','Hampshire',-1.43136,50.9264,'A very interesting place',0),(914,'Kings Arms','pub','UK','Hampshire',-1.43259,50.9231,'A very interesting place',0),(915,'The Waterfront','pub','UK','Hampshire',-1.38101,50.9103,'A very interesting place',0),(916,'Slug and Lettuce','pub','UK','Hampshire',-1.40471,50.9063,'A very interesting place',0),(917,'Bella Italia','restaurant','UK','Hampshire',-1.40469,50.9064,'A very interesting place',0),(918,'Supreme Chinese Restaurant','restaurant','UK','Hampshire',-1.40364,50.905,'A very interesting place',0),(919,'The Anglers Inn','pub','UK','Hampshire',-1.33787,50.9716,'A very interesting place',0),(920,'Nandos','restaurant','UK','Hampshire',-1.40747,50.9037,'A very interesting place',0),(921,'Yo! Sushi','restaurant','UK','Hampshire',-1.40778,50.9036,'A very interesting place',0),(922,'Pizza Hut','restaurant','UK','Hampshire',-1.40737,50.9034,'A very interesting place',0),(923,'Cafe Giardino','restaurant','UK','Hampshire',-1.40733,50.9037,'A very interesting place',0),(924,'ASDA Cafe','restaurant','UK','Hampshire',-1.40777,50.906,'A very interesting place',0),(925,'Mandarin Chef','restaurant','UK','Hampshire',-1.46734,50.9977,'A very interesting place',0),(926,'Fishers Pond','pub','UK','Hampshire',-1.30535,50.9866,'A very interesting place',0),(927,'Kutis Royal Thai Pier','restaurant','UK','Hampshire',-1.40703,50.897,'A very interesting place',0),(928,'Jewels','restaurant','UK','Hampshire',-1.35246,50.9329,'A very interesting place',0),(929,'Saffron','restaurant','UK','Hampshire',-1.3537,50.9679,'A very interesting place',0),(930,'Berties','restaurant','UK','Hampshire',-1.49607,50.9887,'A very interesting place',0),(931,'Park Inn','pub','UK','Hampshire',-1.43695,50.9236,'A very interesting place',0),(932,'The Swan Inn','pub','UK','Hampshire',-1.48449,50.9162,'A very interesting place',0),(933,'The Galley Restaurant','restaurant','UK','Hampshire',-1.48141,50.912,'A very interesting place',0),(934,'The Roebuck','pub','UK','Hampshire',-1.45103,50.8904,'A very interesting place',0),(935,'White Horse','pub','UK','Hampshire',-1.44774,50.8924,'A very interesting place',0),(936,'The Thai Corner Restaurant','restaurant','UK','Hampshire',-1.40016,50.8697,'A very interesting place',0),(937,'Royal Bengal','restaurant','UK','Hampshire',-1.32895,50.862,'A very interesting place',0),(938,'The Bugle','pub','UK','Hampshire',-1.31342,50.8582,'A very interesting place',0),(939,'The King and Queen','pub','UK','Hampshire',-1.31356,50.8586,'A very interesting place',0),(940,'The Victory Inn','pub','UK','Hampshire',-1.31415,50.8588,'A very interesting place',0),(941,'Rat and Parrot','pub','UK','Hampshire',-1.40442,50.9085,'A very interesting place',0),(942,'Goblets','pub','UK','Hampshire',-1.40455,50.9088,'A very interesting place',0),(943,'Bitterne Balti','restaurant','UK','Hampshire',-1.37573,50.9244,'A very interesting place',0),(944,'Charlie Chans','restaurant','UK','Hampshire',-1.39916,50.8983,'A very interesting place',0),(945,'Nazs Cuisine','restaurant','UK','Hampshire',-1.49699,50.9889,'A very interesting place',0),(946,'Purbani Tandoori Restaurant and Take Away','restaurant','UK','Hampshire',-1.4997,50.9882,'A very interesting place',0),(947,'South Garden Chinese Restaurant','restaurant','UK','Hampshire',-1.49974,50.9883,'A very interesting place',0),(948,'Water Margin','restaurant','UK','Hampshire',-1.44068,50.9794,'A very interesting place',0),(949,'The Master Builder','pub','UK','Hampshire',-1.34532,50.9303,'A very interesting place',0),(950,'Sanjha Restaurant','restaurant','UK','Hampshire',-1.4266,50.9168,'A very interesting place',0),(951,'test','test','test','test',1,1,'test',0),(952,'test','test','test','test',1,1,'test',0),(960,'Chalcroft Distribution Park','industrial estate','UK','Hampshire',-1.31209,50.9436,'lovely ;-)',0),(961,'harbour','point','UK','Southampton',-1.43166,50.9058,'',0),(962,'Britannia Wharf','Point','UK','Southampton',-1.38994,50.9047,'',0),(1009,'Port of Southampton','Port','UK','Southampton',-1.44513,50.9095,'Port',0),(1010,'Blackdown','hill','UK','Sussex',45719.3,51.0578,'highest hill in sussex. great views',0),(1011,'Pikes Peak','mountain','USA','Colorado',-105.044,38.84,'Colorado fourteener accessible via the Barr Trail. ',0),(1012,'Cauterets','town','France','Hautes-Pyrenees',-0.112953,42.8893,'nice apparently. we will find out soon',0),(1013,'Dartmoor','moor','UK','Devon',-3.96606,50.6529,'dark and mysterious',1),(1014,'The Crown','pub','UK','Hampshire',-1.4011,50.9319,'nice pub',0),(1016,'Costa Coffee','restaurant','UK','Hampshire',-1.47879,51.208,'Quality coffee and food',0),(1017,'Costa Coffee','restaurant','UK','Hampshire',-1.47879,51.208,'Quality coffee and food',0),(1018,'Steve\'s Inn','pub','UK','Hampshire',-1.8223,51.3194,'Cosy pub with fire place',0),(1019,'Costa Coffee','restaurant','UK','Hampshire',-1.33,51.3889,'Quality coffee and food',0),(1020,'Highclere','town','UK','Berkshire',-1.3677,51.3469,'Has a castle',0),(1021,'Small Eats','restaurant','UK','berkshire',-1.4062,51.3254,'Quick bites',0),(1025,'Kingsclere','town','UK','Berkshire',-1.2366,51.3237,'A town',0),(1026,'Cold Ash','town','UK','Berkshire',-1.2682,51.4249,'Town',0),(1027,'Newbury','town','UK','Berkshire',-1.3176,51.3992,'Great place',0),(1028,'Thatcham','town','UK','Berkshire',-1.2668,51.4052,'Not great',0),(1030,'Donnington','town','UK','Berkshire',-1.3269,51.4227,'posh',0),(1032,'Enborne','town','UK','berkshire',-1.3712,51.3899,'Lots of fields',0),(1033,'Enborne','town','UK','berkshire',-1.3712,51.3899,'Lots of fields',0),(1034,'Hurstbourne Tarrant','town','UK','Berkshire',-1.4508,51.2769,'very small place',0),(1038,'Midgham','town','UK','Berkshire',-1.2007,51.4062,'Has a very nice pub restaurant ',0),(1040,'Test00','town','UK','Hampshire',-1.4,50.9,'FinalTest',0),(1041,'Test1001','town','UK','Hampshire',-1.4,50.9,'Does this still work after changes',0),(1043,'chieveley','pub','UK','berkshire',-1.3326,51.4601,'test',0),(1044,'east meon','town','UK','Hampshire',-1,51,'test',0),(1045,'downs inn','pub','UK','Hampshire',-1.01,51.01,'a nice pub',0),(1046,'downs inn','pub','UK','Hampshire',-1.012,51.012,'a nice pub',0),(1047,'fernhurst','town','UK','Sussex',-0.72,51.05,'a nice village',0),(1048,'testpub','pub','UK','Hampshire',-1.02,51.02,'test',0),(1049,'Whitchurch','town','UK','Berkshire',-1.345,51.224,'small place',0),(1063,'Testing','pub','UK','Berkshire',-1.4,51.1,'Testing',0),(1064,'Testing','pub','UK','Berkshire',-1.4,51.1,'Testing',0),(1068,'Pacifica','city','Pacific State','Pacific Ocean',181,0,'lost city',0),(1070,'Southdown ','pub','england','sussex',-0.723724,50.9432,'nice',0),(1071,'Speen','town','UK','Berkshire',-1.34829,51.4076,'Lots of road humps',0),(1074,'Costa','restaurant','UK','Berkshire',-1.31758,51.3826,'Exceptional coffee and light bites',0),(1075,'Pizza Hut','restaurant','UK','Berkshire',-1.31766,51.3848,'Pizza and salad bar',0),(1076,'Sainsbury\'s Cafe','restaurant','UK','Berkshire',-1.31988,51.3992,'Cafe',0),(1077,'Ask','restaurant','UK','Berkshire',-1.32329,51.4013,'Italian food',0),(1078,'La Tasca','restaurant','UK','Berkshire',-1.3231,51.4013,'Spanish food',0),(1079,'Canal Bar','pub','UK','Berkshire',-1.32303,51.4013,'Gets really busy Friday and Saturday nights',0),(1080,'Subway','restaurant','UK','Berkshire',-1.3236,51.3997,'Get the sandwich you want',0),(1082,'Pacifica','lost city','Pacifica','Pacifica',179,30,'lost city',0),(1083,'Plaistow','city','UK','Sussex',-0.567307,51.0657,'small isolated village. ',0),(1084,'Ropley','city','england','hampshire',-1.07803,51.0719,'not a city really. home of the watercress line',0),(1085,'test1','test1','USA','test1',-0.0002,0.0002,'test1',4),(1086,'Becontree','home','UK','Essex',51.5402,0.11549,'Mohammad\'s House',0);
/*!40000 ALTER TABLE `pointsofinterest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'webapi'
--

--
-- Dumping routines for database 'webapi'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-03  0:37:42
