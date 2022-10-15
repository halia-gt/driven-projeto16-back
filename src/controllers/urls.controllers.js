import { nanoid } from "nanoid";
import { urlRepository } from "../repositories/urls.repositories.js";

async function shortUrl(req, res) {
    const { user, body } = res.locals;
    const url = body.url;

    try {
        const shortUrl = nanoid(8);

        await urlRepository.postShortUrl(user.userId, url, shortUrl);

        res.send({ shortUrl });     
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function readUrl(req, res) {
    const { id } = req.params;

    try {
        const url = (await urlRepository.getUrl(id)).rows[0];

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
        const url = (await urlRepository.getShortUrl(shortUrl)).rows[0];

        if (!url) {
            res.sendStatus(404);
            return;
        }

        const visitCount = url.visitCount + 1;

        await urlRepository.updateVisitCount(visitCount, url.id);

        res.redirect(url.url);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteUrl(req, res) {
    const { urlId } = res.locals;

    try {
        await urlRepository.deleteUrl(urlId);

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