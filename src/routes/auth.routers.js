import express from "express";
import { signUp, singIn } from "../controllers/auth.controllers.js";
import { signInSchemaValidation, signUpEmailValidation, signUpSchemaValidation } from "../middlewares/users.middlewares.js";

const router = express.Router();

router.post("/signup", signUpSchemaValidation, signUpEmailValidation, signUp);
router.post("/signin", signInSchemaValidation, singIn);

export default router;