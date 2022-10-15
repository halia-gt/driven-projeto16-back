import { connection } from "../database/index.js";

async function readUser(req, res) {
    const { user } = res.locals;
    const id = user.userId;

    try {
        const query = ``;
        const user = (await connection.query(query, [email])).rows[0];
        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.send('yay');
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}