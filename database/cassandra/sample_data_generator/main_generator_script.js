const { internet } = require('faker');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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

//starting index, recordsToGenerate, dishIndex, reviewIndex, userIndex
(function generateCassandraRecord(index, recordsToGenerate, dishIdIndex, reviewIdIndex, userIdIndex){
    const recordsIterationCount = 10000;
    const startingIndex = index * recordsIterationCount;
    const endingIndex = Math.min(index * recordsIterationCount + recordsIterationCount, recordsToGenerate);
    console.log(`Started data generation from ${startingIndex+1} to ${endingIndex}.`)

    const restaurantsTableCsvWriter = createCsvWriter({
        path: '../sample_data/restaurants_table.csv',
        header: [
            {id: 'restaurant_id', title: 'restaurant_id'},
            {id: 'restaurant_name', title: 'restaurant_name'},
        ],
        append: true,
    });

    const usersTableCsvWriter = createCsvWriter({
        path: '../sample_data/users_table.csv',
        header: [
            {id: 'user_id', title: 'user_id'},
            {id: 'user_name', title: 'user_name'},
            {id: 'avatar', title: 'avatar'},
            {id: 'vip_status', title: 'vip_status'},
        ],
        append: true,
    });

    const dishesByRestaurantTableCsvWriter = createCsvWriter({
        path: '../sample_data/dishes_by_restaurant_table.csv',
        header: [
            {id: 'restaurant_id', title: 'restaurant_id'},
            {id: 'restaurant_name', title: 'restaurant_name'},
            {id: 'dish_id', title: 'dish_id'},
            {id: 'dish_name', title: 'dish_name'},
            {id: 'ingredients', title: 'ingredients'},
            {id: 'picture', title: 'picture'},
        ],
        append: true,
    });

    const userReviewsByDishTableCsvWriter = createCsvWriter({
        path: '../sample_data/users_review_by_dish_table.csv',
        header: [
            {id: 'dish_id', title: 'dish_id'},
            {id: 'dish_name', title: 'dish_name'},
            {id: 'review_id', title: 'review_id'},
            {id: 'review', title: 'review'},
            {id: 'dined_on', title: 'dined_on'},
            {id: 'stars', title: 'stars'},
            {id: 'user_id', title: 'user_id'},
            {id: 'user_name', title: 'user_name'},
            {id: 'avatar', title: 'avatar'},
            {id: 'vip_status', title: 'vip_status'},
        ],
        append: true,
    });

    const restaurantsTable = [];
    const dishesByRestaurantsTable = [];
    const usersTable = [];
    const userReviewsByDishTable = [];

    console.log("Generating Restaurant Table Data");
    for(let i=startingIndex+1; i<=endingIndex; i++){
        if (i % 1000 === 0){
            console.log(`STATUS: ${i/recordsToGenerate*100}% completed!`);
        }
        const restaurantName = faker.company.companyName() + ` ${faker.random.words(2)}`;
        restaurantsTable.push({
            restaurant_id: i,
            restaurant_name: restaurantName,
        });

        const numberOfDishes = Math.floor(Math.random()*8+2);
        for (let j=0; j<numberOfDishes; j++){
            const randomNameIndex = Math.ceil(Math.random()*dishNames.length-1);
            const dishName = dishNames[randomNameIndex] + ` ${Math.ceil(Math.random()*100000)}`;
            const ingredients = faker.random.words(4);
            const imageUrl = `https://airbnb-bougie.s3-us-west-1.amazonaws.com/listing_images/SDC-files/File-${(Math.ceil(Math.random()*90))}.jpg`;
            
            dishIdIndex++;
            dishesByRestaurantsTable.push({
                restaurant_id: i,
                restaurant_name: restaurantName,
                dish_id: dishIdIndex,
                dish_name: dishName,
                ingredients: ingredients,
                picture: imageUrl,
            });

            const numOfReviews = Math.ceil(Math.random() * 15);
            for(let k=0; k<numOfReviews; k++){
                const rating = Math.ceil(Math.random()*5);
                let userName;
                let userAvatar;
                let userVipStatus; 

                if (usersTable.length > 500 && Math.random() > 0.34) {
                    const randomIndex = Math.ceil(Math.random()*(usersTable.length-1));
                    userName = usersTable[randomIndex].user_name;
                    userAvatar = usersTable[randomIndex].avatar;
                    userVipStatus = usersTable[randomIndex].vip_status;
                } else {
                    userName = faker.name.firstName() + faker.name.lastName()[0];
                    userAvatar = faker.internet.avatar();
                    userVipStatus = faker.random.boolean();

                    userIdIndex++;
                    usersTable.push({
                        user_id: userIdIndex,
                        user_name: userName,
                        avatar: userAvatar,
                        vip_status: userVipStatus,                    
                    });
                };

                reviewIdIndex++;
                userReviewsByDishTable.push({
                    dish_id: dishIdIndex,
                    dish_name: dishName,  
                    dish_url: imageUrl,
                    review_id: reviewIdIndex,
                    review: faker.lorem.paragraph(),
                    dined_on: String(faker.date.past()).substring(0,24),
                    stars: rating,    
                    user_id: userIdIndex,
                    user_name: userName,
                    avatar: userAvatar,
                    vip_status: userVipStatus, 
                })
            }
        }
    }

    restaurantsTableCsvWriter.writeRecords(restaurantsTable)
    .then(() => {
        usersTableCsvWriter.writeRecords(usersTable)
        .then(() => {
            dishesByRestaurantTableCsvWriter.writeRecords(dishesByRestaurantsTable)
            .then(() => {
                userReviewsByDishTableCsvWriter.writeRecords(userReviewsByDishTable)
                .then(() => {
                    console.log('The Restaurants Table CSV file was written successfully');
                    console.log(`Completed Writing ${endingIndex/recordsToGenerate * 100}% of data`);
                    if (endingIndex < recordsToGenerate){
                        generateCassandraRecord(index+1, recordsToGenerate, dishIdIndex, reviewIdIndex, userIdIndex);
                    } else {
                        console.log('------- CSV GENERATION COMPLETE -------');
                    }
                })
            })
        })
    }).catch(err => console.log(err));
})(0, 1200000, 0, 0, 0);

//starting index, recordsToGenerate, dishIndex, reviewIndex, userIndex