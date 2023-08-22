import express from "express";
const router = express.Router();
import {
  getGoals,
  getGoalById,
  createGoal,
  updateGoal,
  DeleteGoal,
} from "../controllers/goalsController.js";

router.get("/", getGoals);
router.get("/:id", getGoalById);
router.post("/", createGoal);
router.put("/:id", updateGoal);
router.delete("/:id", DeleteGoal);

export default router;
