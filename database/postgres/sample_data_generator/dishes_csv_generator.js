const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const { generateUsersRecords } = require('./users_csv_generator');

function generateDishesRecords(index, totalCount, recordsToGenerate){
    console.log(`Started ${index} iteration...`);
    const recordsIterationCount = 250000;
    const startingIndex = index * recordsIterationCount;
    const endingIndex = Math.min(index * recordsIterationCount + recordsIterationCount, recordsToGenerate);
    console.log(`Started dishes records generation from ${startingIndex+1} to ${endingIndex}.`)

    const dishesTableCsvWriter = createCsvWriter({
        path: `../sample_data/dishes_table.csv`,
        header: [
            {id: 'dish_name', title: 'dish_name'},
            {id: 'ingredients', title: 'ingredients'},
            {id: 'picture', title: 'picture'},
            {id: 'restaurant_id', title: 'restaurant_id'},
        ],
        append: true
    });

    const dishNames = [
        'Haroset and plumcot cake',
        'Ricotta and peppercorn gyoza',
        'Fish and cod gyoza',
        'Fish and buffalo skewers',
        'Lamb and potato casserole',
        'Stilton and leek spaghetti',
        'Goat and bean curry',
        'Mascarpone and blackcurrant cheesecake',
        'Egg and cucumber sushi',
        'Game and turkey pie',
        'Treacle and stilton cupcakes',
        'Chilli and mustard seed soup',
        'Feta and napolitana pasta',
        'Celeriac and parsnip soup',
        'Apricot and butter loaf',
        'Goose and fettuccine salad',
        'Flaxseed and rice loaf',
        'Plumcot and fennel salad',
        'Fregola and italian dressing salad',
        'Potato and fish soup',
        'Soya margarine and bouquet garni salad',
        'Pigeon and stilton wontons',
        'Bean and sweetcorn risotto',
        'Tumeric and goat madras',
        'Squash and cardamom muffins',
        'Lemon and orange cupcakes',
        'Chickpea and sweetcorn pasta',
        'Buttermilk and buckwheat pancake',
        'Chicken and venison skewers',
        'Jaggery and bacon salad',
        'Apple and mint jam',
        'Navratan and tongue salad',
        'Cheddar and ginger loaf',
        'Feijoa and cod salad',
        'Courgette and pumpkin risotto',
        'Matzo farfel and saffron salad',
        'Pork and beef casserole',
        'Salt and pumpkin gnocchi',
        'Plantain and blackberry crepes',
        'Jalapeno and cucumber bagel',
        'Tomato and lamb penne',
        'Rabbit and fish casserole',
        'Kirschwasser and red leicester salad',
        'Garam masala and horseradish wontons',
        'Mandarine and clementine  salad',
        'Kalonji and star fruit salad',
        'Rhubarb and vanilla cheesecake',
        'Brie and apple ciabatta',
        'Marzipan and almond cake',
        'Coriander and leek wontons',
    ];
    
    const dishnamesTable = [];
    let count = totalCount;

    console.log("Generating Dishes Data");
    for(let i=startingIndex+1; i<=endingIndex; i++){
        if (i % 20000 === 0){
            console.log(`STATUS: ${i/recordsToGenerate*100}% completed!`);
        }
        if (count % 250000 === 0){
            console.log(`COUNT: ${count}.`)
        }
    
        //dishes object generation
        const numOfDishes = Math.ceil(Math.random() * 8) + 2;
        for(let j=0; j<numOfDishes; j++){
            const randomNameIndex = Math.ceil(Math.random()*dishNames.length-1);
            const imageUrl = `https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/SDC-files/File-${(Math.ceil(Math.random()*90))}.jpg`
            dishnamesTable.push({
                dish_name: dishNames[randomNameIndex] + ` ${Math.ceil(Math.random()*10000)}`,
                ingredients: faker.random.words(4),
                picture: imageUrl,
                restaurant_id: i,
            });
            count++;
        }
    }
    
    dishesTableCsvWriter
    .writeRecords(dishnamesTable)
    .then(() => {
        console.log(`The Dishes Table CSV file - ${count} records were written successfully`); 
        if (endingIndex < recordsToGenerate) {
            const newIndex = index + 1;
            generateDishesRecords(newIndex, count, recordsToGenerate);
        } else {
            generateUsersRecords(0, 1, count);
            console.log(`Total Dishes Count: ${count}`)
        }
    })
    .catch(err => console.log(err));
}

module.exports = {
    generateDishesRecords
}