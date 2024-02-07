import { Router } from "express";
import { Coach } from "../models/Coach";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/coaches", async (req, res) => {
  const results = await Coach.findAll();
  res.json(results);
});

router.post("/coaches", async (req, res) => {
  const result = await Coach.create({ ...req.body, id: uuidv4() });
  res.json(result);
});

export default router;
