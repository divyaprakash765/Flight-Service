const { logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
    
         const response = await this.model.create(data);
         return response;
    }

    async destroy(id) {
         const response = await this.model.destroy({
             where: { id }
         });
         return response;
    }

    async get(id) {
         const response = await this.model.findByPk(id); 
         return response;
    }

    async getAll() {
        const response = await this.model.findAll();
        return response;
    }

    async update(id, data) {  // data -> {col: value, ...}
        const [updatedRows] = await this.model.update(data, { // Fixed method name
            where: { id }
            });
        return updatedRows;
    }
}

module.exports = {CrudRepository};
