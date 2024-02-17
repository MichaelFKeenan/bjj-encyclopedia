import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';
import {Category} from './Category';
import {Coach} from './Coach';

export class Result extends Model {}

Result.init({
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  CoachId: {
    type: new DataTypes.UUID,
    allowNull: true,

  },
  CategoryId: {
    type: new DataTypes.UUID,
    allowNull: true,
  }
}, {
  modelName: 'Results',
  sequelize: sequelize, // this bit is important
});

(Result as any).categoryId = Result.belongsTo(Category);
Category.hasMany(Result);

(Result as any).coachId = Result.belongsTo(Coach);
Coach.hasMany(Result);

export default Result;