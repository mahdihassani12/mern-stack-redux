import express from 'express';
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

import home from './routes/home.js';
import goals from './routes/goals.js';

app.use('/', home);
app.use('/api/goals', goals);

app.listen(4000, () => console.log(`Server is runing on port ${port}`));