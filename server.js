const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

// --------------- //
// DATABASE CLIENT //
// --------------- //

const { client } = require('./model/cassandra/config.js')

client.connect((err) => {
    if(err) {
        console.log('Error connecting to cassandra database.');
        console.log(err);
    } else {
        console.log('Connected to cassandra database.');
    }
})

let restaurantCount = 700001;
let dishCount = 3848636;
let reviewCount = 30784069;
let userCount = 10573146;

// ----------------- //
// TEST API ENDPOINT //
// ----------------- //

app.get('/api/test', (req, res) => {
    res.status(200).send({msg: 'Cassandra Server - SDC'});
})

// ---------------------------- //
// Restaurant + Dishes ENDPOINT //
// ---------------------------- //

app.get('/api/restaurant/:id?', (req, res) => {
    let { id } = req.params;

    if (!id) {
        id = Math.ceil(Math.random()*70000);
    };
    
    const query = `SELECT * FROM dishes_by_restaurant WHERE restaurant_id = ${id};`;

    client.execute(query, (err, data) => {
        if (err) {
            console.log(err);
            res.status(404).send({msg: "Error in fetching restaurant information."});
        } 
        res.status(200).send(data.rows);
    })
});

app.post('/api/restaurant/', (req, res) => {
    let { restaurant_id, restaurant_name, dish_name, ingredients, picture } = req.body;

    if (!restaurant_name.length || !dish_name.length || !ingredients.length) {
        res.status(404).send({msg: "Missing fields."});
    }

    if (!restaurant_id) {
        restaurant_id = Math.ceil(Math.random()*restaurantCount);
    }

    const picture = `https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/SDC-files/File-${(Math.ceil(Math.random()*90))}.jpg`;
    
    const query = `INSERT INTO dishes_by_restaurant(restaurant_id, restaurant_name, dish_id, dish_name, ingredients, picture) VALUES (${randomID}, ${restaurant_id}, ${dish_id}, ${dish_name}, ${ingredients}, ${picture})`;

    //(restaurant_id, restaurant_name, dish_id, dish_name, ingredients, picture)

    client.execute(query, (err, data) => {
        if (err) {
            res.status(404).send({msg: "Error entering restaurant information."});
        } 
        restaurant_id++;
        dish_id++;
        res.status(200).send(data.rows);
    })
});

// ----------------------- //
// Dish + Reviews ENDPOINT //
// ----------------------- //

app.get('/api/dish/:id?', (req, res) => {
    let { id } = req.params;

    if (!id) {
        id = Math.ceil(Math.random()*3848635);
    };
    
    const query = `SELECT * FROM user_reviews_by_dish WHERE dish_id = ${id};`;

    client.execute(query, (err, data) => {
        if (err) {
            res.status(404).send({msg: "Error in fetching dish information."});
        } 
        res.status(200).send(data.rows);
    })
});

app.post('/api/dish/', (req, res) => {
    let { dish_id, dish_name, review, dined_on, stars, user_name, avatar, vip_status } = req.body;
    
    if (!dish_name.length || !review.length || !dined_on.length || !stars.length || !user_name.length || !avatar.length || !vip_status) {
        res.status(404).send({msg: "Missing fields."});
    }
    const userID = Math.ceil(Math.random()*userCount);

    const query = `INSERT INTO user_reviews_by_dish(dish_id, dish_name, review_id, review, dined_on, stars, user_id, user_name, avatar, vip_status) VALUES (${dish_id}, ${dish_name}, ${reviewCount}, ${review}, ${dined_on}, ${stars}, ${userID}, ${user_name}, ${avatar}, ${vip_status});`;
    
    //(dish_id, dish_name, review_id, review, dined_on, stars, user_id, user_name, avatar, vip_status)

    client.execute(query, (err, data) => {
        if (err) {
            res.status(404).send({msg: "Error entering dish information."});
        } 
        if(newEntry){
            dish_id++;
        }
        res.status(200).send(data.rows);
    })
});

// --------------------- //
// SERVER LISTENING PORT //
// --------------------- //

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Cassandra Server Started on PORT: " + PORT);
});