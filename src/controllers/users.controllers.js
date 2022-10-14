import bcrypt from "bcrypt";
import { connection } from "../database/index.js";

async function signUp(req, res) {
    const { name, email, password } = res.locals.body;

    try {
        const query = `INSERT INTO users (name, email, "passwordHash") VALUES ($1, $2, $3);`;
        const passwordHash = bcrypt.hashSync(password, 10);

        await connection.query(query, [name, email, passwordHash]);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function singIn(req, res) {
    const { email, password } = res.locals.body;

    try {
        const userExist = (await connection.query(`SELECT * FROM users WHERE email = $1;`, [email])).rows[0];
        if (!userExist) {
            res.sendStatus(401);
            return;
        }

        const isValidPassword = bcrypt.compareSync(password, userExist.passwordHash);
        if (!isValidPassword) {
            res.sendStatus(401);
            return;
        }

        

        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp,
    singIn
};