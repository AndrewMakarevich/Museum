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
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const response = await UserService.login(email, password);
            res.cookie('refreshToken', response.refreshToken, { maxAge: 30 * 24 * 68 * 60 * 1000, httpOnly: true });
            return res.json(response);
        } catch (e) {
            next(e);
        }

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
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const response = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(response);
        } catch (e) {
            next(e);
        }
    }
    async refreshToken(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const response = await UserService.refreshToken(refreshToken);
            console.log(response);
            res.cookie('refreshCookie', response.refreshToken, { maxAge: 30 * 24 * 68 * 60 * 1000, httpOnly: true });
            return res.json(response);
        } catch (e) {
            next(e);
        }

    }
    async getAll(req, res) {
        const users = await UserService.getAll();
        return res.json(users);
    }
    getOne(req, res) {
        const id = req.params.id;
        return res.json({ message: `User ${id}` });
    }
}
module.exports = new UserConstroller();