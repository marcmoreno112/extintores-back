import { type Request } from "express";
import { type ExtinguisherStructure } from "../../../types";

export interface CreateRequest extends Request {
  body: { extinguisher: ExtinguisherStructure };
  userId: string;
}
