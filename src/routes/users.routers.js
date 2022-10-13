import express from "express";
import { signUp, signUpSchemaValidation } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/signup", signUpSchemaValidation, signUp);

export default router;