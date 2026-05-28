const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const smtpHost = process.env.MAIL_HOST || 'smtp.gmail.com';
        const smtpPort = Number(process.env.MAIL_PORT || 465);
        const smtpSecure =
            process.env.MAIL_SECURE !== undefined
                ? process.env.MAIL_SECURE === 'true'
                : smtpPort === 465;

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: 'PriyamCodeHub || by Priyam Kakadiya',
            to: email,
            subject: title,
            html: body
        });

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', email);
        console.log('SMTP error details - ', error.message);
        throw error;
    }
}

module.exports = mailSender;