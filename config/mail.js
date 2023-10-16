const mailer = require('nodemailer')
const MailTransporter = mailer.createTransport({
    host: "mail.alicefunding.com",
    port: 465,
    secure: true,
  auth: {
    user: 'alice@alicefunding.com',
    pass: 'Teekaymoney.',
  },
})

module.exports = MailTransporter;