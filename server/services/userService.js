const { User } = require('../models/models');
const { Op } = require('sequelize');
const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const MailService = require('../services/mailService');
const TokenService = require('../services/tokenService');
const UserDto = require('../dtos/userDto');
class UserService {
    async registration(nickname, name, password, role, email, avatar) {
        try {
            if (!password) {
                throw ApiError.badRequest('please, fulfill password field');
            } else if (!email) {
                throw ApiError.badRequest('please, fulfill email field');
            } else if (!nickname) {
                throw ApiError.badRequest('please, fulfill nickname field');
            }
            const candidate1 = await User.findOne({
                where: {
                    nickname
                }
            });
            const candidate2 = await User.findOne({
                where: {
                    email
                }
            });
            if (candidate1 && candidate2) {
                throw ApiError.badRequest('Пользователь с такой почтой и никнеймом уже существует');
            }
            if (candidate1) {
                throw ApiError.badRequest('Пользователь с таким никнеймом уже существует');
            }
            if (candidate2) {
                throw ApiError.badRequest('Пользователь с такой почтой уже существует');
            }
            const activationKey = uuid.v4();
            const avatarName = `${uuid.v4()}.jpg`;

            const hashedPassword = await bcrypt.hash(password, 5);
            const user = await User.create({
                nickname,
                name,
                password: hashedPassword,
                role,
                email,
                avatar: avatarName,
                activation_key: activationKey
            });
            avatar.mv(path.resolve(__dirname, "..", "static", "avatars", avatarName));

            const activationLink = `${process.env.HOST_LINK}api/user/activation/${activationKey}`;

            MailService.sendMail(email, activationLink);

            const userData = new UserDto(user);

            const tokens = TokenService.generateTokens({ ...userData });
            await TokenService.saveToken(userData.id, tokens.refreshToken);

            return {
                ...tokens,
                user: userData
            };
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }


    }
    async activate(activationLink) {
        try {
            const user1 = await User.findOne({
                where: { activation_key: activationLink }
            });
            if (!user1) {
                throw ApiError.badRequest('link is incorrect');
            }
            const user2 = await User.findOne({
                where: {
                    [Op.and]: [
                        {
                            activation_key: activationLink
                        },
                        {
                            is_activated: true
                        }
                    ]
                }
            });
            if (user2) {
                throw ApiError.badRequest('account is already activated');
            }
            await User.update(
                { is_activated: true },
                { where: { activation_key: activationLink } }
            );
            return { message: "account is activated successfully" };
        } catch (e) {
            throw ApiError.badRequest(e.message);
        }

    }
}
module.exports = new UserService();