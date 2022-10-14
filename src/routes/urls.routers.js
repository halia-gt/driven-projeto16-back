import express from "express";
import { authValidation } from "../middlewares/auth.middlewares.js";
import { urlSchemaValidation } from "../middlewares/urls.middlewares.js";

const router = express.Router();
router.post("/urls/shorten", authValidation, urlSchemaValidation);

export default router;