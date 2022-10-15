import { userRepository } from "../repositories/users.repositories.js";

async function readUser(req, res) {
    const { user } = res.locals;
    const id = user.userId;

    try {
        const user = (await userRepository.getUser(id)).rows[0];
        if (!user) {
            res.sendStatus(404);
            return;
        }

        res.send(user);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { readUser };