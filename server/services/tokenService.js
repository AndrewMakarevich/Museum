const jwt = require('jsonwebtoken');
const { UserToken } = require('../models/models');
const ApiError = require('../error/ApiError');
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30d' });
        return {
            refreshToken,
            accessToken
        };
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
}
module.exports = new TokenService();