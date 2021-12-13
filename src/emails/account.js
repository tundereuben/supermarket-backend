const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENGRID_API_KEY)

const sendWelcomeEmail = (email, firstName, userId) => {
    const link = `https://supermarketathome.com.ng/activate?id=${userId}`
    sgMail.send({
        to: email,
        bcc: 'tundeogunjimi@gmail.com',
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Thanks for signing up!',
        // text: `
        // Welcome to the app, ${firstName}. To activate your email, copy and paste the link in your browswer:
        // https://supermarketathome.com.ng/activate?id=${userId}
        // `,
        html: `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome</title>

                <style>
                    .container {
                        max-width: 500px;
                        margin: 10px auto;
                        padding: 0;
                        background: #EBEBEB;
                        border: solid 1px #eee;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                        color:rgb(47, 51, 47);
                    }

                    .header {
                        background: url("https://supermarketathome.com.ng/assets/images/grocery-bg.webp") 80%;
                        min-height: 200px;
                        margin: 0;
                        padding: 5px;
                    }

                    .header h3, .header p {
                        margin: 80px 20px 0;
                        color: #081828;
                        width: 210px;
                        text-align: center;
                        padding: 5px;
                    }

                    .header p {
                        margin-top: 0;
                    }

                    .message {
                        padding: 20px 10px;
                        text-align: center;
                    }

                    .message h3 {
                        text-align: center;
                        color: #081828;
                    }

                    .message p {
                        text-align: left;
                        margin: 20px;
                    }

                    .message .activate {
                        margin: 10px auto 20px;
                    }

                    .message a {
                        margin: auto;
                        text-decoration: none;
                        color: #fff;
                        background: #0167F3;
                        padding: 10px;
                        border-radius: 5px;
                    }

                    .bold {
                        font-weight: bold;
                    }

                    .message .center {
                        text-align: center;
                    }

                    .footer {
                        background:rgb(47, 51, 47);
                        color: #fff;
                        min-height: 100px;
                        text-align: center;
                        padding: 5px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h3>Supermarket@Home</h3>
                        <p>Lagos | Abeokuta | Ibadan</p>
                    </div>
                    <div class="message">
                        <h3>Thanks for signing up!</h3>
                        <p>Hello <span class="bold">${firstName}</span>, thanks for signing up. Follow the link below to activate your account.</p>

                        <div class="activate">
                            <a href=${link}> Activate my account</a>
                            <p class="center">Or copy and paste the link below into your browser.</p>
                            <p class="center" style="font-style: italic">
                                ${link}
                            </p>
                        </div>
                    </div>

                    <div class="footer">
                        <p class="bold">Get In Touch With Us</p>
                        <p>
                            Call: 0808 852 5299 ||
                            <a style="color: #ffff" href='https://wa.me/+2348102984114' target='_blank'>Live chat<i class= "lni lni-whatsapp"></i></a>
                        </p>
                    </div>
                </div>
            </body>
            </html>
        `
    })
}

const sendCancelEmail = (email, firstName) => {
    sgMail.send({
        to: email,
        bcc: 'tundeogunjimi@gmail.com',
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Sorry to see you go!',
        text: `${firstName}, it's painful to see you go. Tell me why you left.`,
    })
}

const sendOrderEmail = (email, order) => {

    let cartDisplay = '';
    const cartItems = order.cartItems;

    cartItems.forEach(el => {
        const subTotal = el.quantity * el.unitPrice;
        const tableRow = `<tr>
                            <td>${ el.name }</td> 
                            <td>${ el.unitPrice }</td> 
                            <td>${ el.quantity }</td>
                            <td>${ subTotal }</td>
                        </tr>`
        cartDisplay += tableRow;
    });

    sgMail.send({
        to: email,
        bcc: 'abiolaabisoye98@gmail.com',
        from: 'no-reply@supermarketathome.com.ng',
        subject: 'Order complete',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        
            <style>
                .container {
                    max-width: 500px;
                    margin: 10px auto;
                    padding: 0;
                    background: #EBEBEB;
                    border: solid 1px #eee;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    color:rgb(47, 51, 47);
                }
        
                .header {
                    background: url("https://supermarketathome.com.ng/assets/images/grocery-bg.webp") 80%;
                    min-height: 200px;
                    margin: 0;
                    padding: 5px;
                }
        
                .header h3, .header p {
                    margin: 80px 20px 0;
                    color: #081828;
                    width: 210px;
                    text-align: center;
                    padding: 5px;
                }
        
                .header p {
                    margin-top: 0;
                }
        
                .message {
                    padding: 20px 10px;
                    text-align: center;
                }
        
                .message h3 {
                    text-align: center;
                    color: #081828;
                }
        
                .message p {
                    text-align: left;
                    margin: 20px;
                }
        
                .message .activate {
                    margin: 10px auto 20px;
                }
        
                .message a {
                    margin: auto;
                    text-decoration: none;
                    color: #fff;
                    background: #0167F3;
                    padding: 10px;
                    border-radius: 5px;
                }
        
                .bold {
                    font-weight: bold;
                }
        
                .message .center {
                    text-align: center;
                }
        
                table {
                    width: 80%;
                }
        
                table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                    font-size: 0.9em;
                    margin: 10px auto;
                    padding: 5px;
                }
        
                .footer {
                    background:rgb(47, 51, 47);
                    color: #fff;
                    min-height: 100px;
                    text-align: center;
                    padding: 5px 0;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h3>Supermarket@Home</h3>
                    <p>Lagos | Abeokuta | Ibadan</p>
                </div>
                <div class="message">
                    <h3>Order complete</h3>
                    <p>Hello <span class="bold">[first_name]</span>, thanks for your order.</p>
        
                    <div class="order-summary" style="width: 100%">
                        <table>
                            <tr>
                                <th>Item</th>
                                <th>Qty</th>
                                <th>Unit price</th>
                                <th>Subtotal</th>
                            </tr>
                            ${cartDisplay}
                            <tr>
                                <td colspan="3">Shipping</td>
                                <td>1,000</td>
                            </tr>
                            <tr>
                                <th colspan="3">Grand Total</th>
                                <th>${order.totalPrice}</th>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th>Name</th>
                                <td>${order.user.firstName} ${order.user.lastName}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>${order.user.phone}</td>
                            </tr>
                            <tr>
                                <th>Adress</th>
                                <td>${order.user.shippingAddress.street}, ${order.user.shippingAddress.city}, ${order.user.shippingAddress.state}</td>
                            </tr>
                        </table>
                    </div>
        
                </div>
        
                <div class="footer">
                    <p class="bold">Get In Touch With Us</p>
                      <p>
                        Call: 0808 852 5299 ||
                        <a style="color: #ffff" href='https://wa.me/+2348102984114' target='_blank'>Live chat<i class= "lni lni-whatsapp"></i></a>
                      </p>
                </div>
            </div>
        </body>
        </html>
        `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
    sendOrderEmail
}