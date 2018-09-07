const config = require('./db');
const pg = require('pg')

module.exports = {
  client: 'pg',
  connection: config.DATABASE_URL
}
