import express from "express";
import { signUp, singIn } from "../controllers/auth.controllers.js";
import { schemaValidation } from "../middlewares/schemas.middlewares.js";
import { signInSchemaValidation, signUpEmailValidation, signUpSchemaValidation } from "../middlewares/users.middlewares.js";

const router = express.Router();

router.post("/signup", signUpSchemaValidation, signUpEmailValidation, signUp);
router.post("/signin", schemaValidation("signin"), singIn);

export default router;