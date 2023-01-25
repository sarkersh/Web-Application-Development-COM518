mt_reviewsUSE tca22; -- change mysql to your database name

create table mt_users
(ID int primary key auto_increment,
username varchar(255),
password varchar(255),
admin tinyint default 0);

create table mt_mountains
(ID int primary key auto_increment,
name varchar(255),
difficulty varchar(255),
height float,
distance float,
likes int default 0
);

create table mt_reviews
(ID int primary key auto_increment,
review text,
username varchar(255),
mountain_ID int,
approved tinyint default 0);

insert into mt_users (username,password, admin)
values ('admin','admin',1),
('tim','tim123',0),
('kate','kate123',0);

insert into mt_mountains(name,difficulty,height,distance)
values ('Mount Weatherstone', 'medium', 2500, 8),
('Ice Glaze Peak', 'hard', 3500, 12),
('Mount Tharg', 'medium', 2600, 10),
('Mount Wight', 'medium', 1800, 7),
('Glacier Ridge', 'hard', 3400, 13),
('Green Mountain', 'easy', 1300, 5);

