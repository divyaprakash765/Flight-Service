const { CrudRepository } = require('./crud_repository')
const { Flight } = require('../models/index');

class FlightRepository extends CrudRepository {
    constructor() {
       super(Flight);
    }

    // async somerawquery(){
        // you can write some raw queries
    // }
}

module.exports = FlightRepository;