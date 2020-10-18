DROP SCHEMA IF EXISTS more_places CASCADE;
CREATE SCHEMA IF NOT EXISTS more_places AUTHORIZATION sdc_user;

CREATE TABLE more_places.restaurants (
    restaurant_id SERIAL PRIMARY KEY,   -- id
    restaurant_name varchar(100) --restaurant name
);

CREATE TABLE more_places.dishes (
    dish_id SERIAL PRIMARY KEY,  
    dish_name VARCHAR(50), --dish name
    ingredients VARCHAR(200), --dish ingredients list
    picture VARCHAR(150), --dish picture url link in string
    restaurant_id INT NOT NULL REFERENCES more_places.restaurants(restaurant_id)
);

CREATE TABLE more_places.users (
    user_id SERIAL PRIMARY KEY,  
    user_name VARCHAR(50), --user's name
    avatar VARCHAR(150), --user's avatar url
    vip_status BOOLEAN
);

CREATE TABLE more_places.reviews (
    review_id SERIAL PRIMARY KEY,  
    review VARCHAR(1000), -- one review for this particular restaurant
    dined_on DATE, -- a entry of the review date
    stars smallint, -- number of stars average for the restaurant
    dish_id INT NOT NULL REFERENCES more_places.dishes(dish_id),  -- reference to a dish id
    user_id INT NOT NULL REFERENCES more_places.users(user_id)  -- reference to an user id
);

