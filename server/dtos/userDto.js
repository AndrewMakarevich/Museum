module.exports = class UserDto {
    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.nickname = model.nickname;
    }
};