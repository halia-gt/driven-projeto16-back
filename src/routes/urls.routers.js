import express from "express";
import { authValidation } from "../middlewares/auth.middlewares.js";

const router = express.Router();
router.post("/urls/shorten", authValidation);

export default router;