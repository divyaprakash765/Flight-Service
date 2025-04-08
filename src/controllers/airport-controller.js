const { StatusCodes } = require('http-status-codes');
const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/* 
  POST : /Airports
  req-body {name: 'IGI',cityId: 5,code: 'DEL'}
*/

async function createAirport(req, res) {
    try {
        const airport = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        // Ensure that the status code is set correctly, either from error or default to 500
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

async function getAirports(req,res){
    try {
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

/* 
  POST : /Airports/:id
  req-body {}
*/

async function getAirport(req,res){
    try {
        const airports = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

/* 
  DELETE : /Airports/:id
  req-body {}
*/

async function destroyAirport(req,res){
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

async function updateAirport(req,res){
    try {
        const response = await AirportService.updateAirport(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};
