import { type NextFunction, type Request, type Response } from "express";
import Extinguisher from "../../../database/models/Extinguisher.js";
import CustomError from "../../CustomError/CustomError.js";
import { type UpdateRequest, type CreateRequest } from "./types.js";
import { type FilterQuery } from "mongoose";

export const getExtinguishers = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    Record<string, unknown>,
    { loadNumber: number; filter: string }
  >,
  res: Response,
  next: NextFunction
) => {
  const { loadNumber, filter } = req.query;

  const limit = Number(loadNumber) * 10;

  const dbFilter: FilterQuery<Record<string, unknown>> = filter
    ? { class: filter }
    : {};

  try {
    const extinguishers = await Extinguisher.find(dbFilter)
      .sort({ _id: -1 })
      .limit(limit)
      .exec();

    const status = 200;

    const numberOfExtinguishers = await Extinguisher.countDocuments(
      dbFilter
    ).exec();

    res.status(status).json({ extinguishers, numberOfExtinguishers });
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
      message: "Extinguisher deleted",
    });
  } catch (error) {
    next(error);
  }
};

export const createExtinguisher = async (
  req: CreateRequest,
  res: Response,
  next: NextFunction
) => {
  const { extinguisher } = req.body;

  try {
    const newExtinguisher = await Extinguisher.create(extinguisher);

    if (!newExtinguisher) {
      const error = new CustomError("Error creating the extinguisher", 400);

      throw error;
    }

    res.status(200).json({
      extinguisher: newExtinguisher,
    });
  } catch (error) {
    next(error);
  }
};

export const getExtinguisher = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const extinguisher = await Extinguisher.findById(id).exec();

    if (!extinguisher) {
      const error = new CustomError("Extinguisher not found", 404);

      throw error;
    }

    res.status(200).json({
      extinguisher,
    });
  } catch (error) {
    next(error);
  }
};

export const updateExtinguisher = async (
  req: UpdateRequest,
  res: Response,
  next: NextFunction
) => {
  const { extinguisher } = req.body;

  try {
    const updatedExtinguisher = await Extinguisher.findByIdAndUpdate(
      extinguisher.id,
      extinguisher,
      {
        returnDocument: "after",
      }
    ).exec();

    res.status(200).json({ extinguisher: updatedExtinguisher });
  } catch {
    const error = new CustomError("Error updating the extinguisher", 400);

    next(error);
  }
};
