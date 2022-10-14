import joi from "joi";

const regexPattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
const urlSchema = joi.object({
    url: joi.string()
        .pattern(regexPattern)
        .required()
});

export { urlSchema };