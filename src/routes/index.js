import express from "express";
import usersRouters from "./users.routers.js";
import urlsRouters from "./urls.routers.js";

const router = express.Router();
router.use(usersRouters);
router.use(urlsRouters);

export default router;