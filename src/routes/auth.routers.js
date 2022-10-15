import express from "express";
import { signUp, singIn } from "../controllers/auth.controllers.js";
import { schemaValidation } from "../middlewares/schemas.middlewares.js";
import { signUpEmailValidation } from "../middlewares/users.middlewares.js";

const router = express.Router();

router.post("/signup", schemaValidation("signup"), signUpEmailValidation, signUp);
router.post("/signin", schemaValidation("signin"), singIn);

export default router;