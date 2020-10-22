const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
    contactPoints: ['localhost'],
    localDataCenter: 'datacenter1',
    keyspace: 'sdc',
});

module.exports = {
    client
}