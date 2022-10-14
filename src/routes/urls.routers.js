import express from "express";
import { deleteUrl, openUrl, readUrl, shortUrl } from "../controllers/urls.controllers.js";
import { authValidation } from "../middlewares/auth.middlewares.js";
import { nonRepeatedUrlValidation, urlSchemaValidation, userHasUrlValidation } from "../middlewares/urls.middlewares.js";

const router = express.Router();
router.post("/urls/shorten", authValidation, urlSchemaValidation, nonRepeatedUrlValidation, shortUrl);
router.get("/urls/:id", readUrl);
router.get("/urls/open/:shortUrl", openUrl);
router.delete("/urls/:id", authValidation, userHasUrlValidation, deleteUrl);

export default router;