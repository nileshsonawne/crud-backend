import express from "express";
import auth from "../middleware/authMiddleware.js";
import * as ctrl from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", auth, ctrl.getAll);
router.get("/:id", auth, ctrl.getOne);
router.post("/", auth, ctrl.create);
router.put("/:id", auth, ctrl.update);
router.delete("/:id", auth, ctrl.remove);

export default router;
