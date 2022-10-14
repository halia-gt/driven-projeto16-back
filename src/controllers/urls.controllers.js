import { nanoid } from "nanoid";
import { connection } from "../database/index.js";

async function shortUrl(req, res) {
    const { user, body } = res.locals;
    const url = body.url;

    try {
        const shortUrl = nanoid(8);
        const query = `INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3);`;
        await connection.query(query, [
            user.userId,
            url,
            shortUrl
        ]);

        res.send({ shortUrl });     
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function readUrl(req, res) {
    const { id } = req.params;

    try {
        const url = (await connection.query(`SELECT id, "shortUrl", url FROM urls WHERE id = $1;`, [id])).rows[0];

        if (!url) {
            res.sendStatus(404);
            return;
        }

        res.send(url);        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    shortUrl,
    readUrl
};