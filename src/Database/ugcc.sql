-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2025 at 03:16 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ugcc`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `phoneNum` varchar(20) DEFAULT NULL,
  `isMember` tinyint(1) NOT NULL,
  `Degree` varchar(100) DEFAULT NULL,
  `yearOfStudy` varchar(50) DEFAULT NULL,
  `usi` varchar(10) NOT NULL,
  `reason` text DEFAULT NULL,
  `cyberInterest` text DEFAULT NULL,
  `skillLevel` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `fullName`, `phoneNum`, `isMember`, `Degree`, `yearOfStudy`, `usi`, `reason`, `cyberInterest`, `skillLevel`, `password`, `created_at`) VALUES
(1, 'annaramdial@gmail.com', 'AnnaRam', '592 684 5793', 0, 'infoTech', 'thirdYear', '1234567', 'fxcgfhgjhkjl', 'appSecurity', 'beginner', 'asd1!', '2025-08-27 15:03:46'),
(23, 'annaramdial@gmail.com', 'Ana Asked', '592 684 5793', 0, 'infoTech', 'secondYear', '1234567', NULL, NULL, 'Beginner', 'qwerty1!', '2025-08-27 18:17:51'),
(24, 'singhstax@gmail.com', 'Anna Ramdial', '592 000 0000', 0, 'Bsc Biology', 'thirdYear', '1234567', NULL, NULL, 'Beginner', 'qwerty123!', '2025-08-27 18:27:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
