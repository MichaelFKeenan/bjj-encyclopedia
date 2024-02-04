// database.js
import { Sequelize } from "sequelize";

//this actually all needs to live in an api, it will not run in a browser
export const sequelize = new Sequelize("bjj-encyclopedia", "postgres", "hwaaw599", {
  host: "bjj-encyclopedia.c1wqs44ma0m2.eu-west-2.rds.amazonaws.com",
  dialect: "postgres",
});
