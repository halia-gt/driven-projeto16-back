import { connection } from "../database/index.js";

async function authValidation(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        res.sendStatus(401);
        return;
    }
}

export { authValidation };