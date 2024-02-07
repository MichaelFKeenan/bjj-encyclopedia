import { Router } from "express";
import { Category } from "../models/Category";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/categories", async (req, res) => {
  const results = await Category.findAll();
  res.json(results);
});

router.post("/categories", async (req, res) => {
  const result = await Category.create({ ...req.body, id: uuidv4() });
  res.json(result);
});

export default router;
