import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        const user = (await connection.query(`SELECT * FROM users WHERE email = $1;`, [email])).rows[0];
        if (!user) {
            res.sendStatus(401);
            return;
        }

        const isValidPassword = bcrypt.compareSync(password, user.passwordHash);
        if (!isValidPassword) {
            res.sendStatus(401);
            return;
        }

        const token = jwt.sign({
            userId: user.id
        }, process.env.TOKEN_SECRET);

        await connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2);`,[
            user.id,
            token
        ])

        res.status(200).send({ token, name: user.name });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp,
    singIn
};