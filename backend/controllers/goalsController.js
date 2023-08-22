// returning all goals from database
const getGoals = async (req, res, next) => {
  res.status(200).json({ message: "Get goals" });
};

// storing goals into database
const createGoal = async (req, res, next) => {
    res.status(200).json({ message: "Create a goal" });
}

// updating goals 
const updateGoal = async (req, res, next) => {
    res.status(200).json({ message: `Update a goal ${req.params.id}` });
}

// deleting goals
const DeleteGoal = async (req, res, next) => {
    res.status(200).json({ message: `Delete a goal ${req.params.id}` });
}

export { getGoals, createGoal, updateGoal, DeleteGoal };