'use strict';
import { QueryInterface, DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:QueryInterface) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      productViewed: {
        type: DataTypes.BOOLEAN
      },
      price: {
        type: DataTypes.DECIMAL
      },
      createdAt: {
        type: DataTypes.DATE
      },
      isDeleted: {
        type: DataTypes.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('Product');
  }
};