import express from "express";
import { Sequelize, Model, DataTypes } from "sequelize";
import cors from "cors";

const sequelize = new Sequelize("postgres", "postgres", "hwaaw599", {
  host: "bjj-encyclopedia.c1wqs44ma0m2.eu-west-2.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  ssl: false
});
// const sequelize = new Sequelize('postgres://postgres:hwaaw599@bjj-encyclopedia.c1wqs44ma0m2.eu-west-2.rds.amazonaws.com:5432/bjj-encyclopedia')

class Result extends Model {
  public id!: number;
  public name!: string;
  public description?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Result.init(
  {
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
  },
  {
    tableName: "Results",
    sequelize: sequelize,
  }
);

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/results", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("!!!Connection has been established successfully.");
  } catch (error) {
    console.error("!!!Unable to connect to the database:", error);
  }
  const results = await Result.findAll();
  res.json(results);
});

app.post("/results", async (req, res) => {
  const result = await Result.create(req.body);
  res.json(result);
});

app.put("/results/:id", async (req, res) => {
  const result = await Result.findByPk(req.params.id);
  if (result) {
    await result.update(req.body);
    res.json(result);
  } else {
    res.status(404).json({ error: "Result not found" });
  }
});

app.delete("/results/:id", async (req, res) => {
  const result = await Result.findByPk(req.params.id);
  if (result) {
    await result.destroy();
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Result not found" });
  }
});

app.listen(3001, () => console.log("Server is running on port 3001"));
