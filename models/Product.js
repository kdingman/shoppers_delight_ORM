const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // ID Column for Product Model
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // Product Name Column for Product Model
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Price Column for Product Model
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      },
      // Stock Column for Product Model
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true
        },
        // Category ID Column for Product Model
      category_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Category',
            key: 'id'
          }
        }
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
