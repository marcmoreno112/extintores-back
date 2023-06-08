import { Joi } from "express-validation";
import { type ExtinguisherStructure } from "../types";

export const extinguisherSchema = {
  body: Joi.object<ExtinguisherStructure>({
    brand: Joi.string().required(),
    model: Joi.string().required(),
    class: Joi.array()
      .items(Joi.string().valid("A", "B", "C", "D", "K"))
      .max(5)
      .min(1)
      .required(),
    img: Joi.string()
      .pattern(/http.*:\/\/([A-Za-z]+(\.[A-Za-z]+)+)\/[A-Za-z]+/i)
      .required(),
    usefulLife: Joi.string().required(),
    fireExtinguishingAgent: Joi.string().required(),
    description: Joi.string().required(),
    disadvantages: Joi.string().required(),
    strengths: Joi.string().required(),
    user: Joi.string().required(),
  }),
};
