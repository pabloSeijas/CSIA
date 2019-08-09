-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2019 at 05:24 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csia`
--

-- --------------------------------------------------------

--
-- Table structure for table `casingtipology`
--

CREATE TABLE `casingtipology` (
  `ID` int(11) NOT NULL,
  `SYSTEM_ID` int(11) NOT NULL,
  `STEEL` int(11) DEFAULT NULL,
  `CD` double NOT NULL,
  `CW` double NOT NULL,
  `CID` double NOT NULL,
  `CPR` double NOT NULL,
  `YMC` double NOT NULL,
  `TCC` double NOT NULL,
  `CLEC` double NOT NULL,
  `ICR` double NOT NULL,
  `ECR` double NOT NULL,
  `CT` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cement`
--

CREATE TABLE `cement` (
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cementtipology`
--

CREATE TABLE `cementtipology` (
  `ID` int(11) NOT NULL,
  `SYSTEM_ID` int(11) NOT NULL,
  `CEMENT` int(11) DEFAULT NULL,
  `CD` double NOT NULL,
  `UCS` double NOT NULL,
  `TS` double NOT NULL,
  `CPR` double NOT NULL,
  `YMC` double NOT NULL,
  `TCC` double NOT NULL,
  `CLEC` double NOT NULL,
  `CTC` double NOT NULL,
  `AIF` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `inputparameters`
--

CREATE TABLE `inputparameters` (
  `ID` int(11) NOT NULL,
  `SYSTEM_ID` int(11) NOT NULL,
  `IIP` double NOT NULL,
  `FIP` double NOT NULL,
  `IPC` double NOT NULL,
  `IIT` double NOT NULL,
  `FIT` double NOT NULL,
  `ITC` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `steel`
--

CREATE TABLE `steel` (
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `system`
--

CREATE TABLE `system` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(32) NOT NULL,
  `DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wellgeometry`
--

CREATE TABLE `wellgeometry` (
  `ID` int(11) NOT NULL,
  `SYSTEM_ID` int(11) NOT NULL,
  `OHD` double NOT NULL,
  `HVD` double NOT NULL,
  `OPG` double NOT NULL,
  `FTG` double NOT NULL,
  `BPC` double NOT NULL,
  `PP` double NOT NULL,
  `IMD` double NOT NULL,
  `FFFR` double NOT NULL,
  `FPR` double NOT NULL,
  `YMF` double NOT NULL,
  `TCF` double NOT NULL,
  `CLEF` double NOT NULL,
  `TS` double NOT NULL,
  `OOH` double NOT NULL,
  `WFT` double NOT NULL,
  `VS` double NOT NULL,
  `MNHS` double NOT NULL,
  `MXHS` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casingtipology`
--
ALTER TABLE `casingtipology`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SYSTEM_ID` (`SYSTEM_ID`),
  ADD KEY `STEEL` (`STEEL`);

--
-- Indexes for table `cement`
--
ALTER TABLE `cement`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cementtipology`
--
ALTER TABLE `cementtipology`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SYSTEM_ID` (`SYSTEM_ID`,`CEMENT`),
  ADD KEY `CEMENT` (`CEMENT`);

--
-- Indexes for table `inputparameters`
--
ALTER TABLE `inputparameters`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SYSTEM_ID` (`SYSTEM_ID`);

--
-- Indexes for table `steel`
--
ALTER TABLE `steel`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `system`
--
ALTER TABLE `system`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `wellgeometry`
--
ALTER TABLE `wellgeometry`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `SYSTEM_ID` (`SYSTEM_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casingtipology`
--
ALTER TABLE `casingtipology`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cement`
--
ALTER TABLE `cement`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cementtipology`
--
ALTER TABLE `cementtipology`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inputparameters`
--
ALTER TABLE `inputparameters`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `steel`
--
ALTER TABLE `steel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `system`
--
ALTER TABLE `system`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wellgeometry`
--
ALTER TABLE `wellgeometry`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `casingtipology`
--
ALTER TABLE `casingtipology`
  ADD CONSTRAINT `casingtipology_ibfk_1` FOREIGN KEY (`SYSTEM_ID`) REFERENCES `system` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `casingtipology_ibfk_2` FOREIGN KEY (`STEEL`) REFERENCES `steel` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cementtipology`
--
ALTER TABLE `cementtipology`
  ADD CONSTRAINT `cementtipology_ibfk_1` FOREIGN KEY (`SYSTEM_ID`) REFERENCES `system` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cementtipology_ibfk_2` FOREIGN KEY (`CEMENT`) REFERENCES `cement` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inputparameters`
--
ALTER TABLE `inputparameters`
  ADD CONSTRAINT `inputparameters_ibfk_1` FOREIGN KEY (`SYSTEM_ID`) REFERENCES `system` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wellgeometry`
--
ALTER TABLE `wellgeometry`
  ADD CONSTRAINT `wellgeometry_ibfk_1` FOREIGN KEY (`SYSTEM_ID`) REFERENCES `system` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
