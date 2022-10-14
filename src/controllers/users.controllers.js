import { connection } from "../database/index.js";

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
};