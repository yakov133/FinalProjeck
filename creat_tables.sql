-- create database recipe_projekt;
-- use recipe_projekt;

CREATE TABLE Users(
ID INT NOT NULL AUTO_INCREMENT,
User_Name VARCHAR(20) NOT NULL,
Full_Name VARCHAR(30) NOT NULL,
password VARCHAR(225) NOT NULL,
Email VARCHAR(50) NOT NULL unique,
is_Admin BOOLEAN DEFAULT false,
PRIMARY KEY (ID)
);

CREATE TABLE Recipes(
ID INT NOT NULL AUTO_INCREMENT,
User_Id INT NOT NULL,
Name VARCHAR(20) NOT NULL unique,
Title VARCHAR(40) NOT NULL,
Description VARCHAR(255) NOT NULL,
Difficulty_ID INT NOT NULL,
Views INT DEFAULT 0,
Date DATE NOT NULL,
Source_Name VARCHAR(30) NOT NULL unique,
Source_URL VARCHAR(255) unique,
Servings VARCHAR(255) NOT NULL,
Prep_time_Mins INT NOT NULL,
is_Private BOOLEAN NOT NULL,
PRIMARY KEY (id),
foreign key (User_Id) references Users(id)
);

CREATE TABLE Notes(
ID INT NOT NULL AUTO_INCREMENT,
Recipe_id INT NOT NULL,
Note VARCHAR(250) NOT NULL,
PRIMARY KEY (ID),
FOREIGN KEY (Recipe_id) references Recipes(ID)
);

CREATE TABLE Instructions(
ID INT NOT NULL AUTO_INCREMENT,
Recipe_id INT NOT NULL,
Title VARCHAR(40),
Instruction VARCHAR(300),
 PRIMARY KEY (ID),
 FOREIGN KEY (Recipe_id) references Recipes(ID)
);

create table Images(
ID int not null auto_increment,
Recipe_id int not null,
Img_Url VARCHAR(128) unique,
Title VARCHAR(40),
Alt varchar(40),
primary key (ID),
foreign key(Recipe_id) references Recipes(ID)
);

create table Diffculty(
ID int not null auto_increment,
Rate int,
primary key (ID)
);

create table Diets(
ID int not null auto_increment,
name varchar(15) unique,
primary key (ID)
);

create table Recipe_Diet(
Recipe_id int not null,
Diet_id int,
foreign key (Recipe_id) references Recipes(id),
foreign key (Diet_id) references Diets(ID) 
);

create table Categories(
ID int not null auto_increment,
name varchar(15) unique,
primary key (ID)
);

create table Recipe_Category(
Recipe_id int not null,
Category_id int,
foreign key (Recipe_id) references Recipes(id),
foreign key (Category_id) references Categories(ID) 
);

create table User_Category(
User_id int not null,
Category_Selected_id int,
foreign key (User_id) references Users(id),
foreign key (Category_Selected_id) references Categories(ID) 
);

create table Comments(
ID int not null auto_increment,
User_id int not null,
Comment_Content varchar(250),
Comment_Date date,
primary key (ID)
);

create table Comments_Images(
ID int not null auto_increment,
Comment_id int not null,
Img_Url VARCHAR(128) unique,
Title VARCHAR(40),
Alt varchar(40),
primary key (ID),
foreign key(Comment_id) references Comments(ID)
);

create table Measuring_Units(
ID int not null auto_increment,
Name varchar(15) unique,
primary key (ID)
);

create table Ingredients(
ID int not null auto_increment,
Name varchar(20) unique,
primary key(ID)
);

create table Recipe_Ingredients(
Recipe_id int not null,
Ingredients_id int not null,
Measuring_Unit_id int not null,
Quantity int not null,
Shape varchar(30),
foreign key (Recipe_id) references Recipes(ID),
foreign key (Ingredients_id) references Ingredients(ID),
foreign key (Measuring_Unit_id) references Measuring_Units(ID)
);