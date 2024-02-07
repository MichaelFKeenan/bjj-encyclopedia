// database.js
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "hwaaw599", {
  host: "bjj-encyclopedia.c1wqs44ma0m2.eu-west-2.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  ssl: false
});
