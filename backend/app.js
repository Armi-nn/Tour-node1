import morgan from "morgan";
import express from "express";
import cors from "cors";
import tourRouter from "./router/tourRouter.js";
const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/tours", tourRouter);

export default app;

