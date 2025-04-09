const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const { Op } = require('sequelize');
const compareTime = require('../utils/helpers/datetime-helper')
const AppError = require('../utils/errors/app-error');


const flightRepository = new FlightRepository();

async function createFlight(data){
    try{
        if (!compareTime(data.arrivalTime, data.departureTime)) {
            throw new AppError("Arrival time must be greater than departure time", StatusCodes.BAD_REQUEST);
        }
        const flight = await flightRepository.create(data);
        return flight; 
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explanation = error.errors.map((err) => err.message);
            console.log("Validation Errors:", explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

  async function getAllFlights(query){

     let customFilter = {};
     let sortFilter = [];
    // trips = MUM-DEL
     if(query.trips){
        [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // TODO: add a check that hey are not same
     }
     if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice,(maxPrice == undefined) ? 20000 : maxPrice]
        }
     }

     if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
     }

     

     if(query.tripDate){
        const startOfDay = query.tripDate + " 00:00:00";
    const endOfDay = query.tripDate + " 23:59:59";

    customFilter.departureTime = {
        [Op.between]: [startOfDay, endOfDay]
    }

    if(query.sort){
        const params = query.sort.split(',');
        const sortFilters = params.map((param)=> param.split('_'));
        sortFilter = sortFilters;
    }
     }

    
     try {
        const flights = await flightRepository.getAllFlights(customFilter,sortFilter);
        return flights;
     } catch (error) {
        throw new AppError("Cannot fetch data of all the flights", StatusCodes.INTERNAL_SERVER_ERROR);
     }
  }
 
module.exports = {
    createFlight,
    getAllFlights
}
