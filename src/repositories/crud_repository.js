const { logger } = require('../config');


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data){
        try{
            const rsponse = await this.model.create(data);
            return response;
        } catch(error){
            Logger.error('something went wrong int CRUD Repo : Create');
            throw error;
        }
    }

    async destroy(data){
        try{
            const rsponse = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch(error){
            Logger.error('something went wrong int CRUD Repo : Create');
            throw error;
        }
    }

    async get(data){
        try{
            const rsponse = await this.model.findByPK(data);
            return response;
        } catch(error){
            Logger.error('something went wrong int CRUD Repo : Create');
            throw error;
        }
    }
    async getAll(){
        try{
            const rsponse = await this.model.findAll();
            return response;
        } catch(error){
            Logger.error('something went wrong int CRUD Repo : Create');
            throw error;
        }
    }

    async update(id, data){  // data -> {col: value,....}
        try{
            const rsponse = await this.model.updated(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch(error){
            Logger.error('something went wrong int CRUD Repo : Create');
            throw error;
        }
    }
}

module.exports = CrudRepository;