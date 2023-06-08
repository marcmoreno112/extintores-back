import { Router } from "express";
import {
  createExtinguisher,
  deleteExtinguisher,
  getExtinguishers,
} from "../../controllers/extinguishers/extinguishersController.js";
import { auth } from "../../middlewares/authMiddleware/authMiddleware.js";
import { validate } from "express-validation";
import { extinguisherSchema } from "../../../schemas/extinguisherSchema.js";

const extinguishersRouter = Router();

extinguishersRouter.get("/", getExtinguishers);

extinguishersRouter.delete("/:id", auth, deleteExtinguisher);

extinguishersRouter.post(
  "/",
  auth,
  validate(extinguisherSchema, {}, { abortEarly: false }),
  createExtinguisher
);

export default extinguishersRouter;
