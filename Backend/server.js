const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const PORT = 2200
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected Mail Server");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.SENT_MAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name</strong>: ${name}</p>
           <p><strong>Email</strong>: ${email}</p>
           <p><strong>Phone</strong>: ${phone}</p>
           <p><strong>Message</strong>: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
