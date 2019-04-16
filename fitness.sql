CREATE database DatabaseProject;
USE DatabaseProject;

CREATE TABLE Users (
user_id int AUTO_INCREMENT,
username varchar(15),
email varchar(25),
f_name varchar(25) NOT NULL, 
l_name varchar(25) NOT NULL,
pass varchar(20) NOT NULL,
phone int,
PRIMARY KEY (user_id)
);

CREATE TABLE trainers (
trainer_id int auto_increment,
user_id int,
PRIMARY KEY (trainer_id),
foreign KEY (user_id) REFERENCES Users (user_id)
);

CREATE TABLE goals (
user_id int NOT NULL,
descript varchar(500),
goal_date date
);

CREATE TABLE progress (
user_id int NOT NULL,
height int,
weight int,
age int,
curr_date datetime,
calories int
);

CREATE TABLE workoutPlans (
user_id int NOT NULL,
plan_description varchar(500),
estimate_cals int,
workout_time int
);

CREATE TABLE subscribed (
user_id int NOT NULL
);

CREATE TABLE trainerRelations (
trainer_id int NOT NULL,
user_id int NOT NULL
);

insert into Users 
values (1,'jakewatkins', 'jwatkins@smu.edu', 'Jake', 'Watkins', 'password1', 1111111234);

insert into Users 
values (2, 'jdoe97', 'johndoe@gmail.com', 'John', 'Doe', 'secretpassword', 1234567890);

insert into progress
values (1, 75, 160, 21, '2019-04-14 06:37:20', 100);

