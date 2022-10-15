import { connection } from "../database/index.js";

async function getUser(id) {
    const query = 
    `
        SELECT users.id,
            users.name,
            COALESCE(SUM(urls."visitCount"), 0) AS "visitCount",
            COALESCE(json_agg(json_build_object(
                    'id', urls.id,
                    'shortUrl', urls."shortUrl",
                    'url', urls.url,
                    'visitCount', urls."visitCount"
                ))
                FILTER (WHERE urls."userId" IS NOT NULL),
                '[]'
            ) AS "shortenedUrls"
        FROM users
        LEFT JOIN urls ON users.id = urls."userId"
        WHERE users.id = $1
        GROUP BY users.id;
    `;
    return connection.query(query, [id]);
}

const userRepository = { getUser };

export { userRepository };