-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthday` date DEFAULT NULL,
  `admin` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test',' sql','test.sql@gmail.com','$2b$10$igkPFmoRsySzZdgGnqchI.7.KBMKwf2sU0/p7vnA/im/Qv4fTZeBy','2000-03-15',0),(3,'test',' sql','test.promise@gmail.com','$2b$10$coN4uGzhllk1eKwoviDHTOmtFb8hakWo74iKXtkr267uhMe2nQIKi','2000-03-15',0),(5,'test',' sql','test.poool@gmail.com','$2b$10$6UKSykgiMeUAkHjTDT9gw.tqB1wcK1lAOue3Nyd6xNx2TQZk/cZ0a','2000-03-15',0),(9,'test',' connect','test.connect@gmail.com','$2b$10$Q7FLUh8g5Ug1OkLtvz/9cusirng3EM4ILQsO.xLgjYwEEPMiGSI3S','2000-03-15',0),(10,'test',' url','test.url@test.com','$2b$10$wjyJ7lbSUOuHZatoNdcZwuxNzbzt34zfigEJtOSsrbJoqz2qVaGvK','2000-03-15',0),(11,'axel',' grolier','axel.grolier@gmail.com','$2b$10$3dXHj5v/sbJqWD/J1N9wzeu/Vl5btRgHZ5.fo1EOa8DXZsXLAoPBO','2000-03-15',0),(12,'test',' validation','validation.donnee@gmail.com','$2b$10$Mscii9zadkYugjURxozd3uC1ubB5aIzJi1TjYS/lTtLsWBog61n6q','2000-03-15',0),(13,'lefeuvre',' pierre','esteban.lefeuvre@icloud.com','$2b$10$De6PYuDo6nWBEOI0CMir4OVg0qreavDaUg3NPXHynlg5nR3TDdo9O','2000-07-13',0),(14,'test',' test','test.login@gmail.com','$2b$10$h89HgFEkdHZbIFjsvfE9puqtjVeWQvyYsHFPuSxw/1W2FUDbrUvfm','2000-03-15',0),(16,'test','request','resquest.import@test.com','$2b$10$OWtzxL0ObqwR5GB5Eg5rmOyvI3eMQEyPfIjoyK7PrGmkh7.ln33tu','2000-03-15',0),(18,'Grolier','Axel','test.test@gmail.com','$2b$10$mL16mAwhPPm/dZ1hV/HmzecwxNDB6ugt3KvJZk97sFRdAJVABi//2','2000-03-15',0),(19,'Grolier','Axel','test.jwt@test.com','$2b$10$69hAUxE8xQ3XafyZ.p1TRuZZum8ERrSnI96FM/aWXvZP9IKBhSfnW','2000-03-15',0),(20,'Grolier','Axel','test.jwt2@test.com','$2b$10$XWYE8F42TbOh/S.Uynsvxe44KXpjZqt0wHcm2X/rX79Z/BlhVlJV2','2000-03-15',0),(21,'grolier','axel','test.jwt3@test.com','$2b$10$idL5zypBJh3I5ss7aTPyK.zMQISenqoUhi7uAlsGAWaKj.22EmHx.','2000-03-15',0),(22,'localstorage','jwt','testls.jwt@test.com','$2b$10$eM2FnJceEZOtIL1JIavnM.45MIVU47rM/OQ4B.mKea2/U5SAIwTl2','2000-03-15',0),(23,'dsfvrf','gdgvrghb','hdusgd.iuehds@gmail.com','$2b$10$NSS0AugtoitDzKsynA.pren4ibpp8ANwnv.1VqZblzJimGMApxdO.','2000-03-15',0),(24,'fgbhrfgh','ghftsshbr','fghbtgghnb@djsgf.com','$2b$10$yW6JcE9yw6.0rXg9YXWYrudFbmSJlcMpjzsXl1TVWMzYtPRQGaJ2a','2000-03-15',0),(25,'Axel','test','test.message@gmail.com','$2b$10$W5BexjaaiZT63jlAc6TrQ.IyH0xbCKzi82f4lCRAVCPUraujvMx3.','2000-03-15',0),(26,'axel','grolier','coucouc@gmail.com','$2b$10$LOP/n57rGEyuk//.BMTfbuBSBnIa/54mqS7rP5ZqFyVqRVG5m4ryK','2000-03-15',0),(27,'Hologne','Romain','Romain.hologne@tess.com','$2b$10$/9NWlSCdVigqLBZCVJRSAeT7RtKo2vP2LXriLiDZpROsIhwEb3OA2','2000-08-21',0),(28,'Grolier','Cassandre','cassandre.grolier@gmail.com','$2b$10$/MdkrMRUXpsbtmvLq1s19u8XenoArOAFSVHJ9VfI.UNe4AJELyzvO','1997-06-15',0),(30,'Walker','Paul','Paul.Walker@gmail.com','$2b$10$npt6ntCweYnIxkAkso/qJOeNAKrFGtZGQcYHLPBD0YDlW4buPlXJm','2001-12-25',0),(31,'groupomania','admin','groupomania.admin@gmail.com','$2b$10$siQyWpQEpSvo4UHH90AQ..DLABDD/hfQglGU5zh/g1sB5Dds5yi.C','2022-06-24',0),(32,'admin','admin','groupomania@admin.com','$2b$10$RdjyeK8Xein962jDpuJDj.ZpAycbYQ.91s.AeY.fow.JGS09NoFUu','2022-08-07',1),(33,'ters','hdugs','Test-secu@test.com','$2b$10$u61p1JyriQsrCUQ/3Q6iaeRnjIPuTJQJ9IH7v1mQK6qc6WMulQnFG','2000-03-15',0),(34,'test','test','test@jhd.com','$2b$10$LTiYDnmIVT5hrs7sobR5Au8u9UteC/BomW1fLngg2McXuH6cgxp52','2000-03-15',0),(35,'test','test','test.test@test.com','$2b$10$92zCwN1YVM.wDKE1Uj0UK.rIUSijjCm1.8vNcl5ZByUaEf9OLRX9.','2000-03-15',0),(36,'test','test','test@test.com','$2b$10$wOjXOHiROmIXoAF2Poh3XeG1.msxJdW7pQXN4LVDqI9qqSoB7JZXu','2000-03-15',0),(37,'test','test','test.oral@test.com','$2b$10$Otytfdrqa/a55TZlzeUUj.r6IBhTMCxndVWff.VI32MNHYQZAFmna','2000-03-15',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-15 16:31:33
