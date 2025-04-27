const express = require("express");
const router = express.Router();
const controller = require('../controllers')
const SendEmail = controller.SendEmail

router.post('/send-email', SendEmail.sendEmail)

module.exports = router;