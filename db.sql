use `db`;
CREATE TABLE `users` (
    `id` int(8) NOT NULL AUTO_INCREMENT,
    `username` varchar(42) NOT NULL,
    `password` varchar(255) NOT NULL,

    PRIMARY KEY (`id`)
);
INSERT INTO `users` (username, password) VALUES ('root', 'root');
COMMIT;