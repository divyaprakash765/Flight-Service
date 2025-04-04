const { CrudRepository } = require('./crud_repository')
const { City } = require('../models/index');

class CityRepository extends CrudRepository {
    constructor() {
       super(City);
    }

    // async somerawquery(){
        // you can write some raw queries
    // }
}

module.exports = CityRepository;