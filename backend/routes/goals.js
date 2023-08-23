import express from "express";
const router = express.Router();
import {
  getGoals,
  getGoalById,
  createGoal,
  updateGoal,
  DeleteGoal,
} from "../controllers/goalsController.js";
import { protect } from '../middlewares/auth.js';

router.get("/", protect, getGoals);
router.get("/:id", protect, getGoalById);
router.post("/", protect, createGoal);
router.put("/:id", protect, updateGoal);
router.delete("/:id", protect, DeleteGoal);

export default router;
