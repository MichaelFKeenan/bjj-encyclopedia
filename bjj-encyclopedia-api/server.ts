import express from "express";
import cors from "cors";
import resultsRouter from './routers/results';
import coachesRouter from './routers/coaches';
import categoriesRouter from './routers/categories';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(resultsRouter);
app.use(coachesRouter);
app.use(categoriesRouter);

app.listen(3001, () => console.log("Server is running on port 3001"));
