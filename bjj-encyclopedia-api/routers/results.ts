import { Router } from "express";
import { Result } from "../models/Result";
import { v4 as uuidv4 } from "uuid";

const router = Router();

router.get("/results", async (req, res) => {
  const results = await Result.findAll();
  res.json(results);
});

router.post("/results", async (req, res) => {
  const result = await Result.create({ ...req.body, id: uuidv4() });
  res.json(result);
});

router.put("/results/:id", async (req, res) => {
  const result = await Result.findByPk(req.params.id);
  if (result) {
    await result.update(req.body);
    res.json(result);
  } else {
    res.status(404).json({ error: "Result not found" });
  }
});

router.delete("/results/:id", async (req, res) => {
  const result = await Result.findByPk(req.params.id);
  if (result) {
    await result.destroy();
    res.json({ success: true });
  } else {
    res.status(404).json({ error: "Result not found" });
  }
});

export default router;
