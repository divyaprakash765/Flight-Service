const { CrudRepository } = require('./crud_repository')
const { Airplane } = require('../models/index');

class AirplaneRepository extends CrudRepository {
    constructor() {
       super(Airplane);
    }

    // async somerawquery(){
        // you can write some raw queries
    // }
}

module.exports = AirplaneRepository;