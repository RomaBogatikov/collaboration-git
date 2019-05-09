const express= require('express')
const cars = express.Router()
const Car = require('../Models/cars.js')

// index route (GET) // to display found cars from the db
cars.get ('/', (req, res) => {
    Car.find({}, (err, foundCars) => {
        if (err) {
            res.status(400).json({ error: err.message })
        } else {
            res.status(200).json(foundCars);
        }
    })
})

// create route (POST) // to push cars into the db using curl
cars.post('/', (req, res) => {
    Car.create(req.body, (error, createdCar) => {
        if (error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).send(createdCar)
        }
    })
})

// seed route (GET) // to seed cars into db
cars.get('/seed', (req, res) => {
    Car.create([
        {
            model: "Ford",
            color: 'Red',
        },
        {
            model: "Nissan",
            color: 'Blue',
        },
        {
            model: "Toyota",
            color: 'Green',
        },
        {
            model: "Tesla",
            color: 'Yellow',
        },
        {
            model: "BMW",
            color: 'Black',
        },
        {
            model: "Mercedes",
            color: 'silver',
        },
        {
            model: "Hyundai",
            color: 'White',
        },
    ])
})


module.exports = cars
