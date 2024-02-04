import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class Result extends Model {
  public id!: number;
  public name!: string;
  public description?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Result.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
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
  }
}, {
  tableName: 'results',
  sequelize: sequelize, // this bit is important
});

export default Result;