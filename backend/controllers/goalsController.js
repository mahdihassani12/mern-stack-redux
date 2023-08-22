import asyncHandler from 'express-async-handler'; 

// returning all goals from database
const getGoals = asyncHandler( async (req, res, next) => {
  res.status(200).json({ message: "Get goals" });
});

// get a goal by id
const getGoalById = asyncHandler( async (req, res, next) => {
  res.status(200).json({ message: `Get a goal ${req.params.id}` });
});

// storing goals into database
const createGoal = asyncHandler( async (req, res, next) => {
  res.status(200).json({ message: "Create a goal" });
});

// updating goals
const updateGoal = asyncHandler( async (req, res, next) => {
  res.status(200).json({ message: `Update a goal ${req.params.id}` });
});

// deleting goals
const DeleteGoal = asyncHandler( async (req, res, next) => {
  res.status(200).json({ message: `Delete a goal ${req.params.id}` });
});

export { getGoals, createGoal, updateGoal, DeleteGoal, getGoalById };
