const express = require("express");
const router = express.Router();
const controller = require('../controllers')
const SendEmail = controller.SendEmail
const Payment = controller.Payment

router.post('/send-email', SendEmail.sendEmail)
router.post('/payment/collect', Payment.collectPayment)
router.post('/payment/verify', Payment.verifyPayment)

module.exports = router;