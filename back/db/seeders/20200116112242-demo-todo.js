'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
        title: 'John Doe',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'hoge',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'bar',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
