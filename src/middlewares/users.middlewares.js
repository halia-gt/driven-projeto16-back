import { connection } from "../database/index.js";
import { signInSchema, signUpSchema } from "../schemas/users.schemas.js";

function signUpSchemaValidation(req, res, next) {
    const { name, email, password, confirmPassword } = req.body;
    const validation = signUpSchema.validate({
        name,
        email,
        password,
        confirmPassword
    }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = { name, email, password, confirmPassword };
    next();
}

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

async function signInSchemaValidation(req, res, next) {
    const { email, password } = req.body;
    const validation = signInSchema.validate({
        email,
        password
    }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = { email, password };
    next();
}

export {
    signUpSchemaValidation,
    signUpEmailValidation,
    signInSchemaValidation,
};