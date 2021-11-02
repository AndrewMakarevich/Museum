const jwt = require('jsonwebtoken');
const { UserToken } = require('../models/models');
const ApiError = require('../error/ApiError');
class TokenService {
    generateTokens(payload) {
        try {
            const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' });
            const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: '30d' });
            return {
                refreshToken,
                accessToken
            };
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }

    }
    async saveToken(userId, refresh_token) {
        try {
            const userToken = await UserToken.findOne({
                where: { userId }
            });
            if (userToken) {
                return await userToken.update({
                    refresh_token
                });
            }
            const token = await UserToken.create({ userId, refresh_token });
            return token;
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }
    }
    async deleteToken(refreshToken) {
        try {
            const token = await UserToken.destroy({
                where: {
                    refresh_token: refreshToken
                }
            });
            return { token }
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }
    }
    validateAccessToken(accessToken) {
        try {
            const userData = jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN);
            return userData;
        } catch (e) {
            return null;
        }

    }
    validateRefreshToken(refreshToken) {
        try {
            const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN);
            return userData;
        } catch (e) {
            return null;
        }
    }
    async findToken(token) {
        try {
            const tokenTable = UserToken.findOne({
                where: { refresh_token: token }
            });
            if (!tokenTable) {
                throw ApiError.badRequest('Token does not exist');
            }
            return tokenTable;
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }
    }
    refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.badRequest('Unauthorized user');
        }

    }
}
module.exports = new TokenService();