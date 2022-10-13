import joi from "joi";
import { connection } from "../database/index.js";

const signUpSchema = joi.object({
    name: joi.string()
        .min(3)
        .max(20)
        .required(),

    email: joi.string()
        .email()
        .required(),

    password: joi.string()
        .min(6)
        .required(),

    confirmPassword: joi.ref("password")
});

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

async function signUp(req, res) {
    const { name, email, password, confirmPassword } = res.locals.body;

    try {
        res.send('Testando');
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    signUp,
    signUpSchemaValidation
};