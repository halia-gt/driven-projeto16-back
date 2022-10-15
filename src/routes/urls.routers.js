import express from "express";
import { deleteUrl, openUrl, readUrl, shortUrl } from "../controllers/urls.controllers.js";
import { authValidation } from "../middlewares/token.middlewares.js";
import { schemaValidation } from "../middlewares/schemas.middlewares.js";
import { nonRepeatedUrlValidation, userHasUrlValidation } from "../middlewares/urls.middlewares.js";

const router = express.Router();
router.post("/urls/shorten", authValidation, schemaValidation("url"), nonRepeatedUrlValidation, shortUrl);
router.get("/urls/:id", readUrl);
router.get("/urls/open/:shortUrl", openUrl);
router.delete("/urls/:id", authValidation, userHasUrlValidation, deleteUrl);

export default router;