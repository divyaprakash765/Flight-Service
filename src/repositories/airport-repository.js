const { CrudRepository } = require('./crud_repository')
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository {
    constructor() {
       super(Airport);
    }

    // async somerawquery(){
        // you can write some raw queries
    // }
}

module.exports = AirportRepository;