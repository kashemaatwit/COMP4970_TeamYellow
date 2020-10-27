# Instructions to set up a local MySQL database 
## (only guaranteed to work for Windows machines)

1.) Download [MySQL Community Edition 8.0](https://dev.mysql.com/downloads/installer/) 
- Either option shown works (2.5M, 405.2M)
- In the installer, use all of the default options. Write down both the **port number and your root password**, you'll need both later in development

2.) Create the database

- Open the MySQL 8.0 Command Line Client
- Enter the root password you created
```
Enter password: *********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.21 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

```
- Run the following commands (don't type the "mysql>"). 
Make sure to include semi-colons at the end of commands. Output of the commands are shown.
```
mysql> CREATE DATABASE bcc;
Query OK, 1 row affected (0.01 sec)
mysql> use bcc
Database changed
mysql> select database();
+------------+
| database() |
+------------+
| bcc        |
+------------+
1 row in set (0.00 sec)
```

3.) Add Tables

- Copy and paste the sql script db_init.sql from GitHub into the command line
```
mysql> CREATE TABLE room(
    -> room_id int AUTO_INCREMENT NOT NULL,
    -> room_name varchar(45) NOT NULL,
    -> seat_count INT UNSIGNED NOT NULL,
    -> PRIMARY KEY(room_id)
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql>
mysql> CREATE TABLE time_slot(
    -> time_id int AUTO_INCREMENT NOT NULL,
    -> start_time DateTIME NOT NULL,
    -> end_time DateTIME NOT NULL,
    -> PRIMARY KEY(time_id)
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql>
mysql> CREATE TABLE speaker(
    -> speaker_id int AUTO_INCREMENT NOT NULL,
    -> email varchar(45),
    -> cell_phone varchar(45),
    -> day_of_phone varchar(45),
    -> speaker_name varchar(45) Not NULL,
    -> PRIMARY KEY(speaker_id)
    -> );
Query OK, 0 rows affected (0.02 sec)

mysql>
mysql> CREATE TABLE session(
    -> session_id int AUTO_INCREMENT NOT NULL,
    -> session_name varchar(45) NOT NULL,
    -> speaker_id int NOT NULL,
    -> time_id int NOT NULL,
    -> room_id int NOT NULL,
    -> PRIMARY KEY(session_id),
    -> FOREIGN KEY(speaker_id) REFERENCES speaker(speaker_id),
    -> FOREIGN KEY(time_id) REFERENCES time_slot(time_id),
    -> FOREIGN KEY(room_id) REFERENCES room(room_id)
    -> );
Query OK, 0 rows affected (0.04 sec)
```

4.) Verify that the database has been created properly
```
mysql> show tables;
+---------------+
| Tables_in_bcc |
+---------------+
| room          |
| session       |
| speaker       |
| time_slot     |
+---------------+
4 rows in set (0.01 sec)

mysql> describe room;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| room_id    | int          | NO   | PRI | NULL    | auto_increment |
| room_name  | varchar(45)  | NO   |     | NULL    |                |
| seat_count | int unsigned | NO   |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
3 rows in set (0.01 sec)

mysql> describe time_slot;
+------------+----------+------+-----+---------+----------------+
| Field      | Type     | Null | Key | Default | Extra          |
+------------+----------+------+-----+---------+----------------+
| time_id    | int      | NO   | PRI | NULL    | auto_increment |
| start_time | datetime | NO   |     | NULL    |                |
| end_time   | datetime | NO   |     | NULL    |                |
+------------+----------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> describe speaker;
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| speaker_id   | int         | NO   | PRI | NULL    | auto_increment |
| email        | varchar(45) | YES  |     | NULL    |                |
| cell_phone   | varchar(45) | YES  |     | NULL    |                |
| day_of_phone | varchar(45) | YES  |     | NULL    |                |
| speaker_name | varchar(45) | NO   |     | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> describe session;
+--------------+-------------+------+-----+---------+----------------+
| Field        | Type        | Null | Key | Default | Extra          |
+--------------+-------------+------+-----+---------+----------------+
| session_id   | int         | NO   | PRI | NULL    | auto_increment |
| session_name | varchar(45) | NO   |     | NULL    |                |
| speaker_id   | int         | NO   | MUL | NULL    |                |
| time_id      | int         | NO   | MUL | NULL    |                |
| room_id      | int         | NO   | MUL | NULL    |                |
+--------------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)
