import { connection } from "../database/index.js";

async function readUser(req, res) {
    const { user } = res.locals;
    const id = user.userId;

    try {
        const query = 
            `
                SELECT users.id,
                    users.name,
                    SUM(urls."visitCount") AS "visitCount",
                    json_agg(json_build_object(
                        'id', urls.id,
                        'shortUrl', urls."shortUrl",
                        'url', urls.url,
                        'visitCount', urls."visitCount"
                    )) AS "shortenedUrls"
                FROM users
                JOIN urls ON users.id = urls."userId"
                WHERE users.id = $1
                GROUP BY users.id;
            `;

        const user = (await connection.query(query, [id])).rows[0];
        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { readUser };