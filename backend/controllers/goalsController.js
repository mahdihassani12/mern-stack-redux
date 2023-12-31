import asyncHandler from "express-async-handler";
import Goal from "../models/goal.js";
import User from "../models/user.js";

// returning all goals from database
const getGoals = asyncHandler(async (req, res, next) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// get a goal by id
const getGoalById = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (goal) return res.json(goal);
  res.status(404);
  throw new Error("Resource not found");
});

// storing goals into database
const createGoal = asyncHandler(async (req, res, next) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

// updating goals
const updateGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Resource not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.updateOne(
    { _id: req.params.id },
    { text: req.body.text }
  );
  res.status(200).json(updatedGoal);
});

// deleting goals
const DeleteGoal = asyncHandler(async (req, res, next) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Resource not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Goal.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ message: `Resource has been deleted` });
});

export { getGoals, createGoal, updateGoal, DeleteGoal, getGoalById };
