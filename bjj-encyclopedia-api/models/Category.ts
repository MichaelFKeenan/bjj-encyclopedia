import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';
import Result from './Result';

export class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  modelName: 'Categories',
  sequelize: sequelize, // this bit is important
});


export default Category;