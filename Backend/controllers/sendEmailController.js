const {
    HandleServerError,
    HandleSuccess,
    HandleError
} = require('./BaseController')
const nodemailer = require("nodemailer");



module.exports = {
    sendEmail: (req, res) => {
        try {
            const { firstName, lastName, email, message, phone } = req.body;

            if (!firstName || !lastName || !email || !message || !phone) {
                return HandleError(res, "All fields are required");
            }


            const contactEmail = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                },
            });

            // Verify the connection configuration
            contactEmail.verify((error) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Connected Mail Server");
                }
            });

            // Send the email
            const name = firstName + " " + lastName;
            const mail = {
                from: 'Mizanur Portfolio Web" <' + process.env.EMAIL_USER + '>',
                to: process.env.SENT_MAIL,
                subject: "Contact Form Submited by " + name,
                html: `<p><strong>Name</strong>: ${name}</p>
                       <p><strong>Email</strong>: ${email}</p>
                       <p><strong>Phone</strong>: ${phone}</p>
                       <p><strong>Message</strong>: ${message}</p>`,
            };

            // Send the email using the transport object
            contactEmail.sendMail(mail, (error) => {
                if (error) {
                    HandleError(res, error);
                } else {
                    HandleSuccess(res, "Message Sent");
                }
            });
        } catch (error) {
            HandleServerError(req, res, error);
        }
    }
};