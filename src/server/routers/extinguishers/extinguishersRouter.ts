import { Router } from "express";
import {
  createExtinguisher,
  deleteExtinguisher,
  getExtinguisher,
  getExtinguishers,
  updateExtinguisher,
} from "../../controllers/extinguishers/extinguishersController.js";
import { auth } from "../../middlewares/authMiddleware/authMiddleware.js";
import { validate } from "express-validation";
import { extinguisherSchema } from "../../../schemas/extinguisherSchema.js";

const extinguishersRouter = Router();

extinguishersRouter.get("/", getExtinguishers);

extinguishersRouter.get("/:id", getExtinguisher);

extinguishersRouter.delete("/:id", auth, deleteExtinguisher);

extinguishersRouter.post(
  "/",
  auth,
  validate(extinguisherSchema, {}, { abortEarly: false }),
  createExtinguisher
);

extinguishersRouter.put("/:id", updateExtinguisher);

export default extinguishersRouter;
