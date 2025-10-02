const express = require("express");
const router = express.Router();
const controller = require('../controllers')
const SendEmail = controller.SendEmail
const Payment = controller.Payment
const Razorpay = controller.Razorpay

router.post('/send-email', SendEmail.sendEmail)
router.post('/payment/collect', Payment.collectPayment)
router.post('/payment/verify', Payment.verifyPayment)
router.post('/payment/status', Payment.getPaymentStatus)
router.post('/payment/razorpay/initiate', Razorpay.createOrder)
router.post('/payment/razorpay/validate', Razorpay.validate)

module.exports = router;