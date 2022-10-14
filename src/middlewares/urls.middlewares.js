import { connection } from "../database/index.js";

function urlSchemaValidation(req, res, next) {
    const { url } = req.body;
    const validation = signUpSchema.validate({
        url
    }, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }

    res.locals.body = { name, email, password, confirmPassword };
    next();
}