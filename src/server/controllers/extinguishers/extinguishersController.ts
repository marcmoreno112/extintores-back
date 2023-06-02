import { type NextFunction, type Request, type Response } from "express";
import Extinguisher from "../../../database/models/Extinguisher.js";

export const getExtinguishers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const extinguishers = await Extinguisher.find().limit(10).exec();

    const status = 200;

    res.status(status).json({ extinguishers });
  } catch {
    const error = new Error("Database error");
    next(error);
  }
};
