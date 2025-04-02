'use strict';

const { DATE, or,Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('airplanes',[
      {
        modelNumber: 'airbus350',
        capacity: 900,
        createdAt: new DATE(),
        updatedAt: new DATE(),
      },
      {
        modelNumber: 'boeing777',
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',{[Op.or]: [{modelNumber: 'airbus350'},{modelNumber: 'boeing777'}]})
  }
};
