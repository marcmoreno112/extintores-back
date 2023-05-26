import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../CustomError/CustomError.js";
import "../../loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import errorMessages from "../../utils/errorMessages.js";

const debug = createDebug("extintores-api:middlewares:errorMiddlewares");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 404;

  const message = errorMessages.notFound;

  const error = new CustomError(message, statusCode);

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debug(`Error ${chalk.bgRed(error.message)}`);

  const statusCode = error.statusCode || 500;

  const message = error.statusCode ? error.message : errorMessages.general;

  res.status(statusCode).json({ message });
};
