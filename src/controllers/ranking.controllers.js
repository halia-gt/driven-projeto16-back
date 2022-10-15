import { connection } from "../database/index.js";

async function rankingUsers(req, res) {
    try {
        const query =
            `
                SELECT users.id,
                    users.name,
                    COUNT(urls.id) AS "linksCount",
                    COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
                FROM users
                LEFT JOIN urls ON urls."userId" = users.id
                GROUP BY users.id
                ORDER BY "visitCount" DESC, "linksCount" DESC
                LIMIT 10;
            `;
        const ranks = (await connection.query(query)).rows;

        res.send(ranks);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { rankingUsers };