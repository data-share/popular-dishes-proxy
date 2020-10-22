const { Client } = require('pg');
const client = new Client({
    user: 'sdc_user',
    host: 'localhost',
    database: 'sdc',
    password: 'sprintpassword',
    port: 5432,
});

module.exports = {
    client
}
