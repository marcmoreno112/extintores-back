import { Joi } from "express-validation";
import { type UserCredentials } from "../server/types";

export const loginUserSchema = {
  body: Joi.object<UserCredentials>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
