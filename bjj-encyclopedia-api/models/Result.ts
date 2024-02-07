import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class Result extends Model {
  public id!: any;
  public name!: string;
  public description?: string;
  public coach!: any;
  public category!: any;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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
  coach: {
    type: new DataTypes.UUID,
    allowNull: true,
  },
  category: {
    type: new DataTypes.UUID,
    allowNull: true,
  }
}, {
  tableName: 'Results',
  sequelize: sequelize, // this bit is important
});

export default Result;