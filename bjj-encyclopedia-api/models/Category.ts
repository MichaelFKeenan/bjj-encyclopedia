import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

export class Category extends Model {
  public id!: any;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

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
  tableName: 'Categories',
  sequelize: sequelize, // this bit is important
});

export default Category;