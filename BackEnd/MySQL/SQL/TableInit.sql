CREATE DATABASE DatabaseProject;
USE DatabaseProject;

CREATE TABLE Users (
	user_id int AUTO_INCREMENT,
  username varchar(15),
  email varchar(25),
  f_name varchar(25) NOT NULL,
  l_name varchar(25) NOT NULL,
  pass varchar(20) NOT NULL,
  phone bigint,
  PRIMARY KEY (user_id)
);

CREATE TABLE goals (
	goal_id int AUTO_INCREMENT,
	user_id int NOT NULL,
  descript varchar(500),
  goal_date date,
	PRIMARY KEY (goal_id),
	FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE progress (
	prog_id int AUTO_INCREMENT,
	user_id int NOT NULL,
	height int,
  weight int,
  age int,
descript varchar(500),
  curr_date datetime,
	PRIMARY KEY (prog_id),
	FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE workoutPlans (
	plan_id int AUTO_INCREMENT,
	user_id int NOT NULL,
  description varchar(500),
  calories int,
  workout_time int,
	PRIMARY KEY (plan_id),
		FOREIGN KEY (user_id)
    REFERENCES DatabaseProject.Users (user_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

CREATE TABLE mealHistory (
	meal_id int AUTO_INCREMENT,
	user_id int NOT NULL,
	calories int,
	meal_date datetime,
	PRIMARY KEY (meal_id),
		FOREIGN KEY (user_id)
		REFERENCES DatabaseProject.Users (user_id)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);

CREATE TABLE mealPlans (
	mealplan_id int AUTO_INCREMENT,
	user_id int NOT NULL,
	calories int,
	PRIMARY KEY (mealplan_id),
		FOREIGN KEY (user_id)
		REFERENCES DatabaseProject.Users (user_id)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);

INSERT INTO DatabaseProject.mealPlans (user_id, calories) VALUES
(1, 800),
(2, 900),
(3, 347),
(4, 456),
(5, 1123);

INSERT INTO DatabaseProject.mealHistory (user_id, calories) VALUES
(1, 450),
(2, 690),
(3, 100),
(4, 134),
(5, 2000);

INSERT INTO DatabaseProject.Users (username, email, f_name, l_name, pass, phone) VALUES
('hnoble', 'harrisonnoble@yahoo.com', 'Harrison', 'Noble', 'password1', 9259840665),
('mfontenot', 'mfontenot@smu.edu', 'Mark', 'Fontenot', 'password2', 9259840665),
('jwatkins', 'jwatkins@smu.edu', 'Jake', 'Watkins', 'password3', 9259840665),
('jsmith', 'jsmith@nsa.gov', 'Joe', 'Smith', 'password4', 9259840665),
('fitguy', 'gfieri@gmail.gov', 'Guy', 'Fieri', 'password5', 9259840665);

INSERT INTO DatabaseProject.goals (user_id, descript) VALUES
(1, 'Actually go to the gym sometime'),
(2, 'Run the mile faster than Usain Bolt'),
(3, 'Be able to squat 250 pounds for 10 reps'),
(4, 'Bicep curl 60 pounds'),
(5, 'Bench press 150 pounds'),
(5, 'Squat 300 pounds');

INSERT INTO DatabaseProject.progress (user_id, height, weight, age, descript) VALUES
(1, 72, 155, 19, 'gained 5 pounds of muscle'),
(2, 70, 175, 35, 'ran the mile super fast'),
(3, 71, 170, 21, 'squatted 250 pounds 8 times in a row'),
(4, 68, 140, 23, 'able to bicep curl 50 pounds'),
(5, 70, 190, 45, 'bench pressed 140 pounds'),
(1, 72, 157, 19, 'went to the gym 5 times this week');

INSERT INTO DatabaseProject.workoutPlans (user_id, description, calories, workout_time) VALUES
(1, 'jog on the tredmill', 50, 30),
(2, 'jog and then use the bike', 100, 45),
(3, 'tricep workouts for 1/2 the workout then swim', 200, 60),
(4, 'squats and cardio', 75, 35),
(5, 'bicep curls and back exercises', 80, 45);

CREATE USER 'admin'@'%' IDENTIFIED BY 'CSE3330Lab';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
ALTER USER 'admin'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'CSE3330Lab';
FLUSH PRIVILEGES;

-- CREATE TABLE subscribed (
-- 	user_id int NOT NULL
-- );
--
-- CREATE TABLE trainerRelations (
-- 	trainer_id int NOT NULL,
--     user_id int NOT NULL
-- );
--
-- CREATE TABLE trainers (
-- 	trainer_id int auto_increment,
--     user_id int,
--     PRIMARY KEY (trainer_id),
--     foreign KEY (user_id) REFERENCES Users (user_id)
-- );
