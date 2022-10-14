import { connection } from "../database/index.js";
import { urlSchema } from "../schemas/urls.schemas.js";

function urlSchemaValidation(req, res, next) {
    const { url } = req.body;
    const validation = urlSchema.validate({
        url
    }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = { url };
    next();
}

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

export {
    urlSchemaValidation,
    nonRepeatedUrlValidation,
};