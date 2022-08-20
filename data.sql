CREATE DATABASE demo;

CREATE TABLE demo.demoTable(
                               id int not null,
                               name char(20) not null,
                               status int not null,
                               primary key(id)
) default charset=utf8;

INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (1, 'test-name-1', 0);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (2, 'test-name-2', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (3, 'test-name-3', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (4, 'test-name-4', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (5, 'test-name-5', 2);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (6, 'test-name-6', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (7, 'test-name-7', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (8, 'test-name-8', 0);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (9, 'test-name-9', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (10, 'test-name-10', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (11, 'test-name-11', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (12, 'test-name-12', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (13, 'test-name-13', 0);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (14, 'test-name-14', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (15, 'test-name-15', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (16, 'test-name-16', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (17, 'test-name-17', 2);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (18, 'test-name-18', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (19, 'test-name-19', 1);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (20, 'test-name-20', 0);
INSERT INTO `demo`.`demoTable`(`id`,`name`,`status`) VALUES (21, 'test-name-21', 0);


