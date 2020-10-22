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

const companyName = [
'Risus At Fringilla Industries',
'Augue Scelerisque Mollis Limited',
'Augue Sed Incorporated',
'Egestas Duis Ac Industries',
'Convallis Ante Lectus LLC',
'In Limited',
'Nec Imperdiet Nec Corporation',
'Posuere Cubilia Inc',
'Facilisi Sed Neque Institute',
'Risus Quis Company',
'Mus Proin Vel Industries',
'Vel Corp',
'Tincidunt Donec Inc',
'Congue Associates',
'Ut Company',
'In Consequat Enim Inc',
'Sed Malesuada Consulting',
'Libero Corporation',
'Interdum Curabitur Dictum LLC',
'Tincidunt Nunc Ac Limited',
'Tellus Incorporated',
'Congue Industries',
'Sollicitudin Orci Corp',
'Dapibus Company',
'Mattis Semper Dui Consulting',
'Sem Industries',
'Metus In PC',
'Scelerisque LLC',
'Vel Lectus LLP',
'Luctus Ipsum Corp',
'Ante Ipsum Primis Limited',
'Aliquet Corporation',
'Augue Scelerisque Corp',
'Egestas Sed Pharetra Inc',
'Tempor Arcu Vestibulum Associates',
'Non Feugiat Nec Company',
'Tellus Imperdiet Non Associates',
'Felis Ullamcorper Corporation',
'Commodo LLC',
'Sapien Cras Dolor Ltd',
'Aenean Gravida Nunc Corp',
'Auctor Nunc Corporation',
'Rutrum Lorem Foundation',
'Neque Pellentesque Massa Corp',
'Quam Pellentesque Habitant Foundation',
'Maecenas Mi Felis Inc',
'Cras Vulputate Velit Corporation',
'Vitae LLC',
'Dui Semper Et Limited',
'Placerat Augue Sed Consulting',
'Aliquam Erat Volutpat Industries',
'Nulla Semper Corp',
'Egestas Hendrerit Industries',
'Odio Sagittis Industries',
'Scelerisque Neque PC',
'A Ultricies Adipiscing Inc',
'Convallis Dolor Foundation',
'Cursus Industries',
'Donec Nibh Quisque Foundation',
'Sed Congue Elit Corp',
'Montes Ltd',
'Ornare Company',
'Purus Mauris LLP',
'Dolor Tempus Ltd',
'Sed Limited',
'Aliquam Ltd',
'Ac Facilisis Facilisis Associates',
'Semper Cursus Corporation',
'Et Consulting',
'Commodo LLC',
'Cursus Luctus Company',
'In Consulting',
'Nulla Associates',
'Vitae Semper Egestas Industries',
'Quisque Ornare Incorporated',
'Purus Incorporated',
'Aliquet Magna Industries',
'Nunc Company',
'Sit Amet Corporation',
'Nunc Ullamcorper Eu Incorporated',
'Dictum Associates',
'Fusce Foundation',
'Libero Proin Mi Corporation',
'Massa Integer Institute',
'Faucibus Lectus LLP',
'Quis Corp',
'Placerat Corporation',
'Nibh Dolor Associates',
'Ridiculus Mus Donec LLC',
'Viverra Donec Tempus Associates',
'Eget Metus Eu Inc',
'Quam Pellentesque Habitant Corporation',
'Facilisi Sed Corp',
'Tincidunt Donec Industries',
'Sollicitudin Orci LLC',
'At Libero Ltd',
'Fermentum Risus At Consulting',
'Sed Nec Incorporated',
'Sapien Cras Ltd',
];

//starting index, recordsToGenerate, dishIndex, reviewIndex, userIndex
(function generateCassandraRecord(index, recordsToGenerate, dishIdIndex, reviewIdIndex, userIdIndex){
    const recordsIterationCount = 2000;
    const startingIndex = index * recordsIterationCount;
    const endingIndex = Math.min(index * recordsIterationCount + recordsIterationCount, recordsToGenerate);
    console.log(`Started data generation from ${startingIndex+1} to ${endingIndex}.`)

    const restaurantsTableCsvWriter = createCsvWriter({
        path: './data/restaurants_table.csv',
        header: [
            {id: 'restaurant_id', title: 'restaurant_id'},
            {id: 'restaurant_name', title: 'restaurant_name'},
        ],
        append: true,
    });

    const usersTableCsvWriter = createCsvWriter({
        path: './data/users_table.csv',
        header: [
            {id: 'user_id', title: 'user_id'},
            {id: 'user_name', title: 'user_name'},
            {id: 'avatar', title: 'avatar'},
            {id: 'vip_status', title: 'vip_status'},
        ],
        append: true,
    });

    const dishesByRestaurantTableCsvWriter = createCsvWriter({
        path: './data/dishes_by_restaurant_table.csv',
        header: [
            {id: 'restaurant_id', title: 'restaurant_id'},
            {id: 'dish_id', title: 'dish_id'},
            {id: 'dish_name', title: 'dish_name'},
            {id: 'ingredients', title: 'ingredients'},
            {id: 'picture', title: 'picture'},
            {id: 'restaurant_name', title: 'restaurant_name'},
        ],
        append: true,
    });

    const userReviewsByDishTableCsvWriter = createCsvWriter({
        path: './data/users_review_by_dish_table.csv',
        header: [
            {id: 'dish_id', title: 'dish_id'},
            {id: 'dined_on', title: 'dined_on'},
            {id: 'avatar', title: 'avatar'},
            {id: 'dish_name', title: 'dish_name'},
            {id: 'review', title: 'review'},
            {id: 'review_id', title: 'review_id'},
            {id: 'stars', title: 'stars'},
            {id: 'user_id', title: 'user_id'},
            {id: 'user_name', title: 'user_name'},
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
        const companyNameIndex = Math.ceil(Math.random()*(companyName.length-1));
        const restaurantName = `${faker.random.alpha(5)} ${faker.random.alpha(4)} ${companyName[companyNameIndex]}`;
        restaurantsTable.push({
            restaurant_id: i,
            restaurant_name: restaurantName,
        });

        const numberOfDishes = Math.floor(Math.random()*8+2);
        for (let j=0; j<numberOfDishes; j++){
            const randomNameIndex = Math.ceil(Math.random()*dishNames.length-1);
            const dishName = dishNames[randomNameIndex] + ` ${Math.ceil(Math.random()*100000)}`;
            const ingredients = faker.lorem.words(5);
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
                let userID;

                if (usersTable.length > 500 && Math.random() > 0.34) {
                    const randomIndex = Math.ceil(Math.random()*(usersTable.length-1));
                    userName = usersTable[randomIndex].user_name;
                    userAvatar = usersTable[randomIndex].avatar;
                    userVipStatus = usersTable[randomIndex].vip_status;
                    userID = usersTable[randomIndex].user_id;
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
                    user_id: userID,
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
                        console.log(`Reviews Generated: ${reviewIdIndex}`);
                        console.log('------- CSV GENERATION COMPLETE -------');
                    }
                }).catch(err => console.log(err));
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
})(0, 700000, 0, 0, 0);

//starting index, recordsToGenerate, dishIndex, reviewIndex, userIndex