import { baseSchemas } from "../schemas/schemas.js";

function schemaValidation (validator) {
    if (!baseSchemas[validator]) {
        return `${validator} does not exist`;
    }

    return async function (req, res, next) {
        const validation = baseSchemas[validator].validate(req.body, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(error => error.message);
            res.status(422).send({ message: errors });
            return;
        }
    
        res.locals.body = req.body;
        next();
    }
}

export { schemaValidation };