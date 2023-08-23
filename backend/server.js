import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler } from './middlewares/errors.js';
import colors from 'colors';
import connectDB from './config/db.js';
connectDB();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import home from "./routes/home.js";
import goals from "./routes/goals.js";
import users from "./routes/users.js";

app.use("/", home);
app.use("/api/goals", goals);
app.use("/api/users", users);

app.use(errorHandler);
app.listen(4000, () => console.log(`Server is runing on port ${port}`));
