import joi from "joi";

const regexPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);

const baseSchemas = {
    "signup": joi.object({
        name: joi.string()
            .min(3)
            .max(20)
            .trim()
            .required(),
    
        email: joi.string()
            .email()
            .trim()
            .required(),
    
        password: joi.string()
            .min(6)
            .trim()
            .required(),
    
        confirmPassword: joi.ref("password")
    }),

    "signin": joi.object({
        email: joi.string()
            .email()
            .trim()
            .required(),
    
        password: joi.string()
            .min(6)
            .trim()
            .required(),
    }),

    "url": joi.object({
        url: joi.string()
            .pattern(regexPattern)
            .required()
    })
};

export { baseSchemas };