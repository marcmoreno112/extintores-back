import { Joi } from "express-validation";
import { type ExtinguisherStructure } from "../types";

export const extinguisherSchema = {
  body: Joi.object<{ extinguisher: ExtinguisherStructure }>({
    extinguisher: {
      brand: Joi.string().required(),
      model: Joi.string().required(),
      class: Joi.array()
        .items(Joi.string().valid("A", "B", "C", "D", "K"))
        .max(5)
        .min(1)
        .required(),
      img: Joi.string().required(),
      usefulLife: Joi.string().required(),
      fireExtinguishingAgent: Joi.string().required(),
      description: Joi.string().required(),
      disadvantages: Joi.string().required(),
      strengths: Joi.string().required(),
      user: Joi.string().required(),
    },
  }),
};
