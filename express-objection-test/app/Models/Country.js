const Knex = require('knex');
const connection = require('./config.js');
const { Model } = require('objection');
const knexConnection = Knex(connection);
Model.knex(knexConnection)

class Country extends Model
{
	static get tableName() {
		return 'country';
	}
}

module.exports = Country;
