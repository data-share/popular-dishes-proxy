const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const { generateReviewsRecords } = require('./reviews_csv_generator');

function generateUsersRecords(index, totalCount, totalDishesCount){
    console.log(`Started ${index} iteration...`);
    const totalUsersCount = Math.floor(totalDishesCount / 3);
    const recordsIterationCount = 500000;
    const startingIndex = index * recordsIterationCount;
    const endingIndex = Math.min(index * recordsIterationCount + recordsIterationCount, totalUsersCount);

    const usersTableCsvWriter = createCsvWriter({
        path: `../sample_data/users_table.csv`,
        header: [
            {id: 'user_name', title: 'avatar'},
            {id: 'avatar', title: 'avatar'},
            {id: 'vip_status', title: 'vip_status'},
        ],
        append: true
    });

    const usersTable = [];
    let count = totalCount;

    console.log("Generating Users Data");
    for(let i=startingIndex; i<=endingIndex; i++){
        if (i % 50000 === 0){
            console.log(`STATUS: ${i/totalUsersCount*100}% completed!`);
        }
        if (count % 250000 === 0){
            console.log(`COUNT: ${count}.`)
        }
        if (count % 450000 === 0){
            console.log(`Object at ${count}:`)
            console.log(usersTable[usersTable.length-1]);
        }
        //users object generation
        usersTable.push({
            user_name: faker.name.firstName() + faker.name.lastName()[0],
            avatar: faker.internet.avatar(),
            vip_status: faker.random.boolean(),
        })
        count++;
    }

    usersTableCsvWriter
    .writeRecords(usersTable)
    .then(() => {
        console.log(`The Users Table CSV file is complete - ${count} records were written successfully`);
        if (endingIndex < totalUsersCount) {
            const newIndex = index + 1;
            generateUsersRecords(newIndex, count, totalDishesCount);
        } else {
            generateReviewsRecords(0, 0, totalDishesCount);
            console.log(`Total Users Count: ${count}`)
        }
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
    generateUsersRecords
}