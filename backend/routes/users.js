import express from "express";
const router = express.Router();
import { registerUser } from '../controllers/usersController.js';

router.post('/', registerUser);

export default router;
