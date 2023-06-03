import { Router } from "express";
import { getExtinguishers } from "../../controllers/extinguishers/extinguishersController.js";

const extinguishersRouter = Router();

extinguishersRouter.get("/", getExtinguishers);

export default extinguishersRouter;
