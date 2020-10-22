-- psql -h localhost -d sdc -U sdc_user -p 5432 -a -q -f /Users/harris/Documents/HackReactor/SDC-Popular-dishes/popular-dishes-proxy/database/postgres/maintenance/seed_data.sql

-- INDEX TABLES
CREATE INDEX restaurant_id_index ON more_places.restaurants(restaurant_id);
CREATE INDEX restaurant_id_by_dishes_index ON more_places.dishes(restaurant_id);
