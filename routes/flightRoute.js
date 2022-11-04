const express = require('express');
const { json } = require("express");


const router = express.Router();
router.use(json());
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights);

router.post('/', controller.createFlight);

router.put('/:id', controller.updateFlight);

router.delete('/:id', controller.deleteFlight);

module.exports = router;