import express from "express";
import usersRouters from "./users.routers.js";

const router = express.Router();
router.use(usersRouters);

export default router;