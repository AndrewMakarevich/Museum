const nodemailer = require('nodemailer');

class MailService {
    async sendMail(clientMail, link) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andrewlouvresite@gmail.com',
                pass: "ustodejiveqofpvi"
            }
        });
        await transporter.sendMail({
            from: 'andrewlouvresite@gmail.com',
            to: clientMail,
            subject: 'Louvre',
            html: `
            <h1>Louvre account activation</h1>
            <p>To activate account, please, follow this link:</p>
            <p><a href=${link}></a>${link}</p>`
        });
    }
}
module.exports = new MailService();

