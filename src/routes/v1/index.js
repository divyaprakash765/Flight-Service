const express = require('express');
const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const citRoutes = require('./city-routes');

const router = express.Router();

router.use('/airplanes', airplaneRoutes);
router.use('/cities', citRoutes);

router.get('/info', InfoController.info);  

module.exports = router;
