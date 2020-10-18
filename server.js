const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const { client } = require('./model/config.js')
client.connect();

app.get('/', (req, res) => {
    console.log('here');
    const query = 'SELECT * FROM more_places.restaurants, more_places.dishes WHERE more_places.dishes.restaurant_id = 1';

    client.query(query, (err, data) => {
        if (err) {
            console.log(err);
        } 
        console.log(data);
        client.end();
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Started on PORT: " + PORT);
})