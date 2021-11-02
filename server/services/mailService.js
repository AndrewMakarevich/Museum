const nodemailer = require('nodemailer');

class MailService {
    async sendMail(clientMail, link) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_LOGIN,
                pass: process.env.EMAIL_PASS
            }
        });
        await transporter.sendMail({
            from: process.env.EMAIL_LOGIN,
            to: clientMail,
            subject: 'Louvre account activation',
            html: `
            <h1>Louvre account activation</h1>
            <p>To activate account, please, follow this link:</p>
            <p><a href=${link}></a>${link}</p>`
        });
    }
}
module.exports = new MailService();

