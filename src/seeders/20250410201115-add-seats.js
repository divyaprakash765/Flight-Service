'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();

    await queryInterface.bulkInsert('seats', [
      { airplaneId: 1, row: 1, col: 'A', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 1, col: 'B', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 1, col: 'C', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 1, col: 'D', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 1, col: 'E', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 1, col: 'F', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'A', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'B', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'C', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'D', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'E', createdAt: timestamp, updatedAt: timestamp },
      { airplaneId: 1, row: 2, col: 'F', createdAt: timestamp, updatedAt: timestamp }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('seats', {
      airplaneId: 1,
    }, {});
  }
};
