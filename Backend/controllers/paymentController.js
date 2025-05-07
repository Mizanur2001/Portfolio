const {
    HandleServerError,
    HandleSuccess,
    HandleError,
    ValidateMobile,
    ValidateEmail,
} = require('./BaseController')
const { Cashfree } = require('cashfree-pg');
const crypto = require('crypto');
const axios = require('axios');


function generateOrderId() {
    const uniqueId = crypto.randomBytes(16).toString('hex');
    const hash = crypto.createHash('sha256');
    hash.update(uniqueId);
    const orderId = hash.digest('hex');
    return orderId.substr(0, 12);
}


module.exports = {
    collectPayment: async (req, res) => {
        try {
            const { amount, customer_name, customer_phone, customer_email } = req.body

            if (!amount || !customer_name || !customer_phone || !customer_email) {
                return HandleError(res, "Please provide all required fields")
            }

            if (amount <= 0) {
                return HandleError(res, "Amount should be greater than 0")
            }

            if (!ValidateMobile(customer_phone)) {
                return HandleError(res, "Please provide a valid phone number")
            }

            if (!ValidateEmail(customer_email)) {
                return HandleError(res, "Please provide a valid email address")
            }


            const order_id = generateOrderId()
            const castomer_id = customer_name.replace(/\s+/g, "") + "_" + order_id;
            let request = {
                "order_amount": amount,
                "order_currency": "INR",
                "order_id": order_id,
                "customer_details": {
                    "customer_id": castomer_id,
                    "customer_phone": customer_phone,
                    "customer_name": customer_name,
                    "customer_email": customer_email
                },
                "order_meta": {
                    "return_url": `https://mizanur.in?orderId=${order_id}`,
                }
            }

            Cashfree.XClientId = process.env.CLIENT_ID;
            Cashfree.XClientSecret = process.env.CLIENT_SECRET;
            Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
            Cashfree.PGCreateOrder("2023-08-01", request).then(response => {
                HandleSuccess(res, response.data, "Payment Initiated successfully");
            }).catch(error => {
                HandleError(res, error.response.data.message);
            })

        } catch (error) {
            HandleServerError(req, res, error)
        }
    },
    verifyPayment: (req, res) => {
        try {
            const { orderId } = req.body
            if (!orderId) {
                return HandleError(res, "Please provide order id")
            }

            Cashfree.XClientId = process.env.CLIENT_ID;
            Cashfree.XClientSecret = process.env.CLIENT_SECRET;
            Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
            Cashfree.PGOrderFetchPayments("2023-08-01", orderId).then((response) => {
                HandleSuccess(res, response.data, "Payment verified successfully");
            }).catch(error => {
                HandleError(res, error.response.data.message);
            })
        } catch (error) {
            HandleServerError(req, res, error)
        }
    },
    getPaymentStatus: (req, res) => {
        try {
            const { orderId } = req.body
            if (!orderId) {
                return HandleError(res, "Please provide order id")
            }

            axios.get(`https://api.cashfree.com/pg/orders/${orderId}`,{
            // axios.get(`https://sandbox.cashfree.com/pg/orders/${orderId}`,{
                headers: {
                    'x-client-id': process.env.CLIENT_ID,
                    'x-client-secret': process.env.CLIENT_SECRET,
                    'x-api-version': '2023-08-01',
                }
            }).then((response) => {
                HandleSuccess(res, response.data, "Payment status fetched successfully");
            }).catch(error => {
                HandleError(res, error.response.data.message);
            })
        } catch (error) {
            HandleServerError(req, res, error)
        }
    }

}