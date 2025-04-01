const { logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            logger.error('Something went wrong in CRUD Repo: Create');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: { id }
            });
            return response;
        } catch (error) {
            logger.error('Something went wrong in CRUD Repo: Destroy');
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id); // Fixed method name
            return response;
        } catch (error) {
            logger.error('Something went wrong in CRUD Repo: Get');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            logger.error('Something went wrong in CRUD Repo: GetAll');
            throw error;
        }
    }

    async update(id, data) {  // data -> {col: value, ...}
        try {
            const [updatedRows] = await this.model.update(data, { // Fixed method name
                where: { id }
            });
            return updatedRows;
        } catch (error) {
            logger.error('Something went wrong in CRUD Repo: Update');
            throw error;
        }
    }
}

module.exports = {CrudRepository};
