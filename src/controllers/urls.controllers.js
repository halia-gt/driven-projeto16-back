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

async function openUrl(req, res) {
    const { shortUrl } = req.params;
    if (!shortUrl) {
        res.sendStatus(404);
        return;
    }

    try {
        const url = (await connection.query(`SELECT id, url, "visitCount" FROM urls WHERE "shortUrl" = $1;`, [shortUrl])).rows[0];

        if (!url) {
            res.sendStatus(404);
            return;
        }

        const visitCount = url.visitCount + 1;

        await connection.query(`UPDATE urls SET "visitCount" = $1 WHERE id = $2;`, [visitCount, url.id]);

        res.redirect(url.url);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteUrl(req, res) {
    const { urlId } = res.locals;

    try {
        await connection.query(`DELETE FROM urls WHERE id = $1;`, [urlId]);

        res.sendStatus(204);        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    shortUrl,
    readUrl,
    openUrl,
    deleteUrl
};