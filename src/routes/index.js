import express from "express";
import authRouters from "./auth.routers.js";
import urlsRouters from "./urls.routers.js";
import usersRouters from "./users.routers.js";
import rankingRouters from "./ranking.routers.js";

const router = express.Router();
router.use(authRouters);
router.use(urlsRouters);
router.use(usersRouters);
router.use(rankingRouters);

export default router;