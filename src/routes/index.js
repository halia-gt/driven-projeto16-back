import express from "express";
import authRouters from "./auth.routers.js";
import urlsRouters from "./urls.routers.js";

const router = express.Router();
router.use(authRouters);
router.use(urlsRouters);

export default router;