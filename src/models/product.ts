import {  DataTypes, Model } from 'sequelize';
import dbcon from  '../config/dbcon';

class Product extends Model{
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public productViewed!: number
  public createdDate!: Date;
  public isDeleted!: number;
  public updatedDate!: Date;

}

  Product.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DECIMAL
      },
      description: {
        type: DataTypes.TEXT
      },
      productViewed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize: dbcon,
      tableName: 'Product'
    }
  );



export default Product;
