const Razorpay = require('razorpay');
const crypto = require('crypto');
const {
    HandleServerError,
    HandleSuccess,
    HandleError
} = require('./BaseController');

module.exports = {
    createOrder: async (req, res) => {
        try {

            const { amountInPaise } = req.body;

            if (!amountInPaise || amountInPaise <= 0) {
                return HandleError(res, "Invalid amount");
            }

            const razorpay = new Razorpay({
                key_id: process.env.RAZORPAY_KEY,
                key_secret: process.env.RAZORPAY_SECRET,
            });

            razorpay.orders.create({
                amount: amountInPaise,
                currency: "INR",
                receipt: `receipt_order_${Date.now()}`,
            }, (err, order) => {
                if (err) {
                    return HandleError(res, "Error creating order");
                }
                HandleSuccess(res, { order }, "Order created successfully");
            });
        } catch (error) {
            HandleServerError(req, res, error);
        }
    },
    validate: async (req, res) => {
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

            if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
                return HandleError(res, "Missing required fields");
            }
            const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
            sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
            const digest = sha.digest("hex");
            if (digest !== razorpay_signature) {
                return HandleError(res, "Transaction is not legit!");
            }
            HandleSuccess(res, {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
            }, "Payment validated successfully");
        } catch (error) {
            HandleServerError(req, res, error);
        }
    }
}