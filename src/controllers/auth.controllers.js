import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authRepository } from "../repositories/auth.reposotiries.js";

async function signUp(req, res) {
    const { name, email, password } = res.locals.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 10);

        await authRepository.signUp(name, email, passwordHash);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function singIn(req, res) {
    const { email, password } = res.locals.body;

    try {
        const user = (await authRepository.userExist(email)).rows[0];
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

        await authRepository.signIn(user.id, token);

        res.status(200).send({ token });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp,
    singIn
};