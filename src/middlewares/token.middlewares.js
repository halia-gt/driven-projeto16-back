import jwt from "jsonwebtoken";
import { connection } from "../database/index.js";

async function authValidation(req, res, next) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        res.sendStatus(401);
        return;
    }

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        const session = (await connection.query(`SELECT * FROM sessions WHERE "userId" = $1 AND token = $2;`,[
            user.userId,
            token
        ])).rows[0];

        if (!session) {
            res.sendStatus(401);
            return;
        }

        res.locals.user = user;
        next();        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { authValidation };