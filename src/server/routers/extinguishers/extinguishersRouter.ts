import { Router } from "express";
import {
  deleteExtinguisher,
  getExtinguishers,
} from "../../controllers/extinguishers/extinguishersController.js";
import { auth } from "../../middlewares/authMiddleware/authMiddleware.js";

const extinguishersRouter = Router();

extinguishersRouter.get("/", getExtinguishers);

extinguishersRouter.delete("/delete/:id", auth, deleteExtinguisher);

export default extinguishersRouter;
