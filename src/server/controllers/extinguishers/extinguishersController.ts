import { type NextFunction, type Request, type Response } from "express";
import Extinguisher from "../../../database/models/Extinguisher.js";
import CustomError from "../../CustomError/CustomError.js";

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

export const deleteExtinguisher = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const extinguisher = await Extinguisher.findByIdAndDelete(id).exec();

    if (!extinguisher) {
      const error = new CustomError("Extinguisher not found", 404);

      throw error;
    }

    res.status(200).json({
      message: `Extinguisher deleted`,
    });
  } catch (error) {
    next(error);
  }
};
