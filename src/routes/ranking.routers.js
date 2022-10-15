import express from "express";
import { rankingUsers } from "../controllers/ranking.controllers.js";

const router = express.Router();

router.get("/ranking", rankingUsers);

export default router;