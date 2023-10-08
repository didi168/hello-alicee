const mailer = require('nodemailer')
const MailTransporter = mailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
  auth: {
    user: 'alice@helloalicee.com',
    pass: 'Teekaymoney.',
  },
})

module.exports = MailTransporter;