const ApiError = require('../error/ApiError');
const TokenService = require('../services/tokenService');
const { UserToken } = require('../models/models');
module.exports = function (req, res, next) {
    try {
        const headerAuthorization = req.headers.authorization;
        if (!headerAuthorization) {
            return next(ApiError.badRequest('Unauthorized'));
        }
        const token = headerAuthorization.split(' ')[1];
        if (!token) {
            return next(ApiError.badRequest('Unauthorized'));
        }
        const UserData = TokenService.validateAccessToken(token);
        if (!UserData) {
            return next(ApiError.badRequest('Invalid token'));
        }
        req.user = UserData;
        next();


    } catch (e) {
        return next(ApiError.badRequest(e.message));
    }
};