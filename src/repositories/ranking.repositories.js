import { connection } from "../database/index.js";

async function getRanks() {
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
    return connection.query(query);
}

const rankRepository = {
	getRanks
};

export { rankRepository };