const express = require('express');
const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const citRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/cities', citRoutes);
router.use('/airports', airportRoutes);
router.use('/flights',flightRoutes);

router.get('/info', InfoController.info);  

module.exports = router;
