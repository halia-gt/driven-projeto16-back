import express from "express";
import { signUp } from "../controllers/users.controllers.js";
import { signUpEmailValidation, signUpSchemaValidation } from "../middlewares/users.middlewares.js";

const router = express.Router();

router.post("/signup", signUpSchemaValidation, signUpEmailValidation,  signUp);

export default router;