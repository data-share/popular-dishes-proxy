const faker = require('faker');
const { generateDishesRecords } = require('./dishes_csv_generator');

function generateRestaurantRecord(recordsToGenerate){
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;

    const restaurantsTableCsvWriter = createCsvWriter({
        path: '../sample_data/restaurants_table.csv',
        header: [
            {id: 'restaurant_name', title: 'restaurant_name'}
        ]
    });

    const restaurantsTable = [];
    console.log("Generating Restaurant Table Data");
    for(let i=1; i<=recordsToGenerate; i++){
        if (i % 50000 === 0){
            console.log(`STATUS: ${i/recordsToGenerate*100}% completed!`);
        }
        restaurantsTable.push({
            restaurant_name: faker.company.companyName() + ` ${faker.random.words(2)}`
        });
    }

    restaurantsTableCsvWriter
    .writeRecords(restaurantsTable)
    .then(() => {
        console.log('The Restaurants Table CSV file was written successfully');
        generateDishesRecords(0, 1, recordsToGenerate)
    });
}

module.exports = {
    generateRestaurantRecord
}