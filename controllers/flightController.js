const { Flights } = require("../models/Flight");
const { v4: uuid } = require("uuid");
const { userInfo } = require("os");


// Get all flights
exports.getFlights = async (req, res) => {
    try {
        const flights = Flights;
        res.status(200).json(
            {
                message: "All flights",
                flights: flights,
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get one flight
exports.getFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => { flight.id === id});
        res.status(200).json(
            {
                message: "Flight Found",
                flight,
            }
            );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Book a new flight
exports.createFlight = async (req, res) => {
    try {
        const {title, time, date, price} = await req.body;
        const newPassenger = {
            id: uuid(),
            time,
            title,
            price,
            date
        };
        Flights.push(newPassenger);
        console.log(Flights);
        res.status(201).json(
            {
                message: "Flight Booked",
                newPassenger,
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => {flight.id === id})
        const { title, date, price } = await req.body;
        // time: flight.time;
        title: flight.title;
        price: flight.price;
        date: flight.date;
        res.status(200).json(
            {
                message: "Flight Updated",
                flight
            }
            );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => { flight.id === id});
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json(
            {
                message: "Flight Cancelled",
                flight
            }
            );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}