'use strict';
import { QueryInterface, DataTypes } from 'sequelize';


module.exports = {
  up: async (queryInterface:QueryInterface) => {
    await queryInterface.renameColumn('Product', 'createdDate', 'createdAt');
    await queryInterface.renameColumn('Product', 'updatedDate', 'updatedAt');

  },

  down: async (queryInterface:QueryInterface) => {
    await queryInterface.renameColumn('Product', 'createdDate', 'createdAt');
    await queryInterface.renameColumn('Product', 'updatedDate', 'updatedAt');

  }
};
