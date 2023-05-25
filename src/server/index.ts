import express from "express";
import cors from "cors";
import morgan from "morgan";
import { generalError, notFoundError } from "./middlewares/errorMiddlewares.js";
import pingController from "./controllers/pingController/pingController.js";
import paths from "./paths/paths.js";

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS!.split(" ");

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use(paths.ping, pingController);

app.use(notFoundError);

app.use(generalError);

export default app;
