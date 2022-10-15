import express from "express";
import { readUser } from "../controllers/users.controllers.js";
import { authValidation } from "../middlewares/token.middlewares.js";

const router = express.Router();

router.get("/users/me", authValidation, readUser);

export default router;