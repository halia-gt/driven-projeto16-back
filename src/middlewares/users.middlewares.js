import { connection } from "../database/index.js";

async function signUpEmailValidation(req, res, next) {
    const { email } = res.locals.body;

    try {
        const userExist = (await connection.query(`SELECT * FROM users WHERE email = $1;`, [email])).rows[0];
        if (userExist) {
            res.sendStatus(409);
            return;
        }

        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { signUpEmailValidation };