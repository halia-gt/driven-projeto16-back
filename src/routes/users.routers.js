import express from "express";
import { signUp, singIn } from "../controllers/users.controllers.js";
import { signUpEmailValidation, signUpSchemaValidation } from "../middlewares/users.middlewares.js";

const router = express.Router();

router.post("/signup", signUpSchemaValidation, signUpEmailValidation, signUp);
router.post("/signin", singIn);

export default router;