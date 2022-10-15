import { connection } from "../database/index.js";

async function nonRepeatedUrlValidation(req, res, next) {
    const { url } = res.locals.body;
    const { user } = res.locals;

    try {
        const query = `SELECT * FROM urls WHERE url = $1 and "userId" = $2;`;
        const repeatedUrl = (await connection.query(query, [url, user.userId])).rows[0];

        if (repeatedUrl) {
            res.sendStatus(409);
            return;
        }

        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function userHasUrlValidation(req, res, next) {
    const { user } = res.locals;
    const { id } = req.params;
    if (!id) {
        res.sendStatus(404);
        return;
    }

    try {
        const url = (await connection.query(`SELECT * FROM urls WHERE id = $1`, [id])).rows[0];
        if (!url) {
            res.sendStatus(404);
            return;
        }
        
        if (user.userId !== url.userId) {
            res.sendStatus(401);
            return;
        }

        res.locals.urlId = id;
        next();        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    nonRepeatedUrlValidation,
    userHasUrlValidation
};