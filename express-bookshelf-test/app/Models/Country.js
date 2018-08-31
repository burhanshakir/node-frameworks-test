const bookshelf = require('../../bookshelf');
const Model = bookshelf.Model;

class Country extends Model
{
	get tableName() {
		return 'country';
	}
}

module.exports = bookshelf.model('Country', Country);
