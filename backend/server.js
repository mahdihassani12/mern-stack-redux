import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler } from "./middlewares/errors.js";
import colors from "colors";
import path from "path";
import connectDB from "./config/db.js";
connectDB();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import goals from "./routes/goals.js";
import users from "./routes/users.js";

app.use("/api/goals", goals);
app.use("/api/users", users);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(errorHandler);
app.listen(4000, () => console.log(`Server is runing on port ${port}`));
