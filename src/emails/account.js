const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendWelcomeEmail = (email, firstName) => {
    sgMail.send({
        to: email,
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Thanks for signing up!',
        text: `Welcome to the app, ${firstName}. Let me know how you get along with the app.`,
    })
}

const sendCancelEmail = (email, firstName) => {
    sgMail.send({
        to: email,
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Sorry to see you go!',
        text: `${firstName}, it's painful to see you go. Tell me why you left.`,
    })
}

const sendOrderEmail = (email, cartItems) => {

    let cartDisplay = '';
    cartItems.forEach(el => {
        const tableRow = `<tr style="border: solid 1px #ccc">
                            <td>${ el.name }</td> 
                            <td>${ el.unitPrice }</td> 
                            <td>${ el.quantity }</td>
                        </tr>`
        cartDisplay += tableRow;
    });

    sgMail.send({
        to: email,
        bcc: 'abiolaabisoye98@gmail.com',
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Order complete',
        // text: 'todo',
        html: '<html> <body> <table>' + cartDisplay + '</table> </body> </html>'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
    sendOrderEmail
}