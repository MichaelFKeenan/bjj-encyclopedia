import express from "express";
import cors from "cors";
import resultsRouter from './routers/results';
import coachesRouter from './routers/coaches';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(resultsRouter);
app.use(coachesRouter);

app.listen(3001, () => console.log("Server is running on port 3001"));
