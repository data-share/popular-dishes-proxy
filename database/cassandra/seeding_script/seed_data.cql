-- cqlsh -f seed_data.cql

USE sdc;

-- CLEAN TABLES
TRUNCATE dishes_by_restaurant;
TRUNCATE user_reviews_by_dish;
TRUNCATE users;
TRUNCATE restaurants;

COPY dishes_by_restaurant(restaurant_id, restaurant_name, dish_id, dish_name, ingredients, picture) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/cassandra/sample_data/dishes_by_restaurant_table.csv' WITH HEADER = true;
COPY user_reviews_by_dish(dish_id, dish_name, review_id, review, dined_on, stars, user_id, user_name, avatar, vip_status) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/cassandra/sample_data/users_review_by_dish_table.csv' WITH HEADER = true;
COPY users(user_id, user_name, avatar, vip_status) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/cassandra/sample_data/users_table.csv' WITH HEADER = true;
COPY restaurants(restaurant_id, restaurant_name) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/cassandra/sample_data/restaurants_table.csv' WITH HEADER = true;