-- psql -h localhost -d sdc -U sdc_user -p 5432 -a -q -f /Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/maintenance/seed_data.sql

-- CLEAN TABLES
TRUNCATE more_places.restaurants RESTART IDENTITY CASCADE;
TRUNCATE more_places.users RESTART IDENTITY CASCADE;

COPY more_places.restaurants(restaurant_name) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/sample_data/restaurants_table.csv' DELIMITER ',' CSV HEADER;
COPY more_places.dishes(dish_name, ingredients, picture, restaurant_id) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/sample_data/dishes_table.csv' DELIMITER ',' CSV HEADER;
COPY more_places.users(user_name, avatar, vip_status) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/sample_data/users_table.csv' DELIMITER ',' CSV HEADER;
COPY more_places.reviews(review, dined_on, stars, dish_id, user_id) FROM '/Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/sample_data/reviews_table.csv' DELIMITER ',' CSV HEADER;