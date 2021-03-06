const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function generateReviewsRecords(index, totalCount, totalDishesCount){
    console.log(`Started ${index} iteration...`);
    const totalUsersCount = Math.ceil(totalDishesCount / 3);
    const recordsIterationCount = 100000;
    const startingIndex = index * recordsIterationCount;
    const endingIndex = Math.min(index * recordsIterationCount + recordsIterationCount, totalDishesCount);
    console.log(`Started reviews records generation from ${startingIndex+1} to ${endingIndex}.`)

    const reviewsTableCsvWriter = createCsvWriter({
        path: `../sample_data/reviews_table.csv`,
        header: [
            {id: 'review', title: 'review'},
            {id: 'dined_on', title: 'dined_on'},
            {id: 'stars', title: 'stars'},
            {id: 'dish_id', title: 'dish_id'},
            {id: 'user_id', title: 'user_id'},
        ],
        append: true
    });

    const reviewsTable = [];
    let count = totalCount;

    console.log("Generating Reviews Data");
    for(let i=startingIndex+1; i<endingIndex; i++){
        if (i % 50000 === 0){
            console.log(`STATUS: ${i/totalDishesCount*100}% completed!`);
        }
        if (count % 250000 === 0){
            console.log(`COUNT: ${count}.`)
        }

        const numOfReviews = Math.ceil(Math.random() * 15);
        for(let k=0; k<numOfReviews; k++){
            //reviews object generation
            const rating = Math.ceil(Math.random()*5);
            const reviewerID = Math.max(Math.floor(Math.random()*(totalUsersCount-2)), 1);

            if (reviewerID > (totalUsersCount - 2)) {
                console.log('Near Max Reviewer ID: ' + reviewerID);
            }
            
            reviewsTable.push({
                review: faker.lorem.paragraph(),
                dined_on: String(faker.date.past()).substring(0,24),
                stars: rating,
                dish_id: i,
                user_id: reviewerID,
            })
            count++;
        }
    }

    reviewsTableCsvWriter
    .writeRecords(reviewsTable)
    .then(() => {
        console.log(`The Reviews Table CSV file - ${count} records were written successfully`);
        if (endingIndex < totalDishesCount) {
            const newIndex = index + 1;
            generateReviewsRecords(newIndex, count, totalDishesCount);
        } else {
            console.log(`Total Review Count: ${count}`)
            console.log('------- CSV GENERATION COMPLETE -------');
        }
    })
    .catch(err => console.log(err));
}

module.exports = {
    generateReviewsRecords
}