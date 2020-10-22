const axios = require('axios');

const iterations;

(function testCassandraServer(iterations){
    console.log('----------------------');
    console.log('Cassandra Server Test');
    const url = `http://localhost:3001/api/restaurant`;
    const responseTimes = [];

    (function helper(iteration){
        const startTime = Date.now();
        axios.get(url).then(res => {
            const queryTime = Date.now() - startTime;
            responseTimes.push(endTime)
        })
    }(iterations)


    console.log('--------------------------------------------');
    console.log('Cassandra server test results:');
    console.log(`Average per second`)
})(1000);