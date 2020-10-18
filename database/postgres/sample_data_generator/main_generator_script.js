const { generateRestaurantRecord } = require('./restaurants_csv_generator');

//generateRestaurantRecord(callback)
//generateDishesRecords(index, totalCount, callback)
//generateUsersRecords(index, totalCount, totalDishesCount, callback)
//generateReviewsRecords(index, totalCount, totalDishesCount)

const restaurantsToGenerate = 1200000;

(function generateCSV(){
    generateRestaurantRecord(restaurantsToGenerate)
})()