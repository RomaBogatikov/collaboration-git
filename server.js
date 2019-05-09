const express = require('express');
const app = express();
const PORT = 3000;
const carsController = require('./controllers/cars.js');

app.use('/cars', carsController);



app.listen(PORT, () => {
  console.log('collaborating on port', PORT);
})
