import express from "express";
import { shortUrl } from "../controllers/urls.controllers.js";
import { authValidation } from "../middlewares/auth.middlewares.js";
import { nonRepeatedUrlValidation, urlSchemaValidation } from "../middlewares/urls.middlewares.js";

const router = express.Router();
router.post("/urls/shorten", authValidation, urlSchemaValidation, nonRepeatedUrlValidation, shortUrl);

export default router;