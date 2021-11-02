const ApiError = require('../error/ApiError');

class Validator {
    validateEmail(email) {
        const regEx = /^\s*[a-zA-z-_0-9\r]{3,}@([a-z]{2,}.)?[a-z]{4,}.[a-z]{2,}$/;
        if (!regEx.test(email)) {
            throw ApiError.badRequest(`<h3>Incorrect email validation</h3>
            <h4>You can enter an email using one of the presented formats:</h4>
            <ul>
            <li>exa_mple_18@mf.grsu.by</li>
            <li>example2001@gmail.com</li>
            <li>exa_m-ple@list.ru</li>
            </ul>`);
        } else {

        }
    }
    validatePassword(password) {
        const regEx = /^[0-9\w^&?"#№$@!]{8,}$/;
        if (!regEx.test(password)) {
            throw ApiError.badRequest(`<h3>Incorrect password validation</h3>
            <h4>You can enter the password using a-zA-Z letters, 0-9 numbers and w^&?"#№$@! symbols</h4>
            <h5>Password must be 8 symbols length minimum</h5>`);
        } else {

        }
    }
};
module.exports = new Validator();