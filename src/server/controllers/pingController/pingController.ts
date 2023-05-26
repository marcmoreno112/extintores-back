import { type Request, type Response } from "express";
import errorMessages from "../../../utils/errorMessages.js";

const pingController = (req: Request, res: Response) => {
  const status = 200;
  const message = errorMessages.ping;

  res.status(status).json({ message });
};

export default pingController;
