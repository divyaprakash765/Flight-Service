const { StatusCodes } = require('http-status-codes');
const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/* 
  POST : /Airports
  req-body {
  flightNumber: 'UK 808',
  airplaneId: 'a380',
  departureAirportId: 12,
  arrivalAirportId: 11,
  arrivalTime: '11:10:00',
  departureTime: '9:10:00',
  price: 2000,
  boardingGate: '12A',
  totalSeats: 120
  }
*/

async function createFlight(req, res) {
    try {

        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats
        });
        SuccessResponse.data = flight;
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

async function getAllFlights(req, res){
    try {

        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
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

/* 
  POST : /flights/:id
  req-body {}
*/

async function getFlight(req,res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error.message || 'Something went wrong';
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

async function updateSeats(req,res) {
    try {
        const response = await FlightService.updateSeats({
            flightId: req.params.id,
            seats: req.body.seats,
            dec: req.body.dec
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
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats
};
