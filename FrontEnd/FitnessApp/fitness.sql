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
calories int,
primary key (user_id)
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

insert into progress
values (2, 80, 167, 20, '2019-04-17 02:39:21', 109);

use DatabaseProject;
drop table workoutPlans;

CREATE TABLE BiometricStatistics (
user_id int NOT NULL,
height int,
weight int,
age int,
date_ date
);

CREATE TABLE FitnessGoals (
user_id int not null,
mile_time TIME,
lifting_goals varchar(250),
weight int, 
primary key(user_id)
);

CREATE TABLE WorkoutPlan (
user_id int NOT NULL,
workout_name varchar (25),
plan_description varchar(500),
estimate_cals_to_burn int,
workout_time TIME,
workout_date date
);

CREATE TABLE Followers (
follower_id int not null,
followee_id int not null,
primary key (follower_id, followee_id)
);

drop table trainers;
drop table trainerRelations;
drop table testtbl;

CREATE TABLE testtbl (
img blob not null
);

INSERT into testtbl
Values (LOAD_FILE('C:/possibleprintout_1.png'));

select * from testtbl;