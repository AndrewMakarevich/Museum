const { User } = require('../models/models');
const ApiError = require('../error/ApiError');
const UserService = require('../services/userService');

class UserConstroller {
    async registration(req, res, next) {
        try {
            const { nickname, name, password, role, email } = req.body;
            const { avatar } = req.files;
            const response = await UserService.registration(nickname, name, password, role, email, avatar);
            res.cookie('refreshToken', response.refreshToken, { maxAge: 30 * 24 * 68 * 60 * 1000, httpOnly: true });
            return res.json(response);
        } catch (e) {
            next(e);
        }

    }
    login(req, res) {
        return res.json({ message: "login" });
    }
    async activate(req, res, next) {
        try {
            const activationKey = req.params.link;
            const response = await UserService.activate(activationKey);
            return res.redirect(process.env.FRONT_APP_LINK).json({ message: response });
        } catch (e) {
            next(e);
        }

    }
    getAll(req, res) {
        return res.json({ message: "All users" });
    }
    getOne(req, res) {
        const id = req.params.id;
        return res.json({ message: `User ${id}` });
    }
}
module.exports = new UserConstroller();