const Country = require('../Models/Country');

class Controller
{
	hello(req, res) {
		return res.json({ hello: 'world' });
	}

	compute(req, res) {
		let x = 0, y = 1;

		let max = 10000 + Math.random() * 500;

		for (let i = 0; i <= max; i++) {
		    let z = x + y;
		    x = y;
		    y = z;
		}

		return res.json({ status: 'done' })
	}

	async countries(req, res) {
		let data = await Country.fetchAll();

		return res.json({ data });
	}
}

module.exports = new Controller();
