const express = require('express');
const controller = require('./app/Controllers/Controller')
const app = express();

app.listen(9000, () => {
  	console.log('listening on 9000')
})

app.get('/hello', controller.hello);
app.get('/compute', controller.compute);
app.get('/countries', controller.countries);
