const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendWelcomeEmail = (email, firstName) => {
    sgMail.send({
        to: email,
        from: 'tundeogunjimi@gmail.com',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${firstName}. Let me know how you get along with the app.`,
    })
}

const sendCancelEmail = (email, firstName) => {
    sgMail.send({
        to: email,
        from: 'tundeogunjimi@gmail.com',
        subject: 'Sorry to see you go!',
        text: `${firstName}, it's painful to see you go. Tell me why you left.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}