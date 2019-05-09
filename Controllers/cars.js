const express= require('express')
const cars = express.Router()

cars.get ('/', (req, res) => {
    res.send('Cars controller')
})


module.exports = cars