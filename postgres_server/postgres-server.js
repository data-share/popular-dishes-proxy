const express = require('express');
const io = require('@pm2/io');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

const meter = io.meter({
    name: 'req/min',
    samples: 1,
    timeframe: 60,
})

const { client } = require('../model/posgres/config.js')
client.connect((err) => {
    if(err) {
        console.log('Error connecting to posgres database.');
        console.log(err);
    }
    console.log('Connected to posgres database.');
});

app.get('/api/test', (req, res) => {
    meter.mark();
    res.status(200).send({msg: 'Request Received'});
})

app.get('/api/restaurant/:id?', (req, res) => {
    meter.mark();

    let { id } = req.params;

    if (!id) {
        id = Math.ceil(Math.random()*1200000);
    };
    
    const query = `SELECT more_places.restaurants.restaurant_name, more_places.dishes.dish_id, more_places.dishes.dish_name,  more_places.dishes.ingredients,  more_places.dishes.picture FROM more_places.restaurants JOIN more_places.dishes on more_places.restaurants.restaurant_id = more_places.dishes.restaurant_id WHERE more_places.restaurants.restaurant_id = ${id};`;
    
    client.query(query, (err, data) => {
        if (err) {
            res.status(404).send({msg: "Error in fetching restaurant information."});
        } 
        res.status(200).send(data.rows);
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Posgres Server Started on PORT: " + PORT);
})