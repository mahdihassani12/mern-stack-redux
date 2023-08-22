import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create a goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update a goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete a goal ${req.params.id}` });
});

export default router;
