const express = require('express');

const { cityController } = require('../../controllers');
const { cityMiddlewares } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST
router
    .post(
         '/',
         cityMiddlewares.validateCreateRequest,
        cityController.createCity);


module.exports = router;