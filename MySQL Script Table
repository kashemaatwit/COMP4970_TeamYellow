CREATE TABLE room(
room_id int AUTO_INCREMENT NOT NULL,
room_name varchar(45) NOT NULL,
seat_count INT UNSIGNED NOT NULL,
PRIMARY KEY(room_id)
);

CREATE TABLE time_slot(
time_id int AUTO_INCREMENT NOT NULL,
start_time DateTIME NOT NULL,
end_time DateTIME NOT NULL,
PRIMARY KEY(time_id)
);

CREATE TABLE speaker(
speaker_id int AUTO_INCREMENT NOT NULL,
email varchar(45),
cell_phone varchar(45),
day_of_phone varchar(45), 
speaker_name varchar(45) Not NULL,
PRIMARY KEY(speaker_id)
);

CREATE TABLE session(
session_id int AUTO_INCREMENT NOT NULL,
session_name varchar(45) NOT NULL,
speaker_id int NOT NULL,
time_id int NOT NULL,
room_id int NOT NULL,
PRIMARY KEY(session_id),
FOREIGN KEY(speaker_id) REFERENCES speaker(speaker_id),
FOREIGN KEY(time_id) REFERENCES timeslot(time_id),
FOREIGN KEY(room_id) REFERENCES room(room_id)
);
