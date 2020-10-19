DROP KEYSPACE IF EXISTS SDC;
CREATE KEYSPACE SDC WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

USE sdc;

-------------------------------
--------- QUERY TABLES --------
-------------------------------

--insert restaurant, insert dish,
CREATE TABLE dishes_by_restaurant (
    restaurant_id INT,
    restaurant_name text, --restaurant name
    dish_id INT, --dish ID
    dish_name text, --dish name
    ingredients text, --dish ingredients list
    picture text, --dish image url link string
    PRIMARY KEY(restaurant_id)
);

-- insert dish, insert review, insert user, 
CREATE TABLE user_reviews_by_dish (
    dish_id INT, --dish ID
    dish_name text, --dish name
    review_id INT,
    review text, -- one review for this particular restaurant
    dined_on text, -- review date
    stars SMALLINT, -- number of stars average for the resturant 
    user_id INT,
    user_name text, --user's name
    avatar text, --avatar url
    vip_status text, -- avatar's vip status
    PRIMARY KEY(review_id, dined_on)
) WITH CLUSTERING ORDER BY (dined_on DESC);


-------------------------------
--------- DATA TABLES ---------
-------------------------------

-- insert user
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_name text, --user's name
    avatar text, --user's avatar url
    vip_status BOOLEAN, --user's vip status
);

-- insert restaurant
CREATE TABLE restaurants (
    restaurant_id INT PRIMARY KEY,
    restaurant_name text --restaurant name
);