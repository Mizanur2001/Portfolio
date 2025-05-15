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
            const { amount, customer_name, customer_phone, customer_email, orderId } = req.body

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

            let order_id = orderId;
            if (orderId === null) order_id = generateOrderId();


            const customer_id = customer_name.replace(/\s+/g, "") + "_" + customer_phone.replace(/\D/g, "");
            const feedMoreUrl = process.env.feedMoreUrl
            let redirectUrl = "https://mizanur.in";

            // Check if the customer is FeedMore
            if (customer_email === "rakib100295@gmail.com" &&
                customer_phone === "7872727290" &&
                customer_name === "feedMore") {
                redirectUrl = `${feedMoreUrl}/admin/orders`;
                try {
                    const response = await axios.post(`${feedMoreUrl}/api/v1/tools/payment/initiate`, {
                        order_id: order_id,
                        status: "INITIATE"
                    });
                    if (response?.data?.code !== 200) {
                        return HandleError(res, response?.data?.message);
                    }
                } catch (error) {
                    const errorData = error?.response?.data || { message: error.message || "Unknown error" };
                    return HandleError(res, errorData);
                }
            }

            // Initiate payment
            let request = {
                "order_amount": amount,
                "order_currency": "INR",
                "order_id": order_id,
                "customer_details": {
                    "customer_id": customer_id,
                    "customer_phone": customer_phone,
                    "customer_name": customer_name,
                    "customer_email": customer_email
                },
                "order_meta": {
                    "return_url": `${redirectUrl}?orderId=${order_id}`,
                }
            }

            Cashfree.XClientId = process.env.CLIENT_ID;
            Cashfree.XClientSecret = process.env.CLIENT_SECRET;
            Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;
            // Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
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
            // Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
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
            const { orderId, customer_name, customer_email, customer_phone } = req.body
            if (!orderId) {
                return HandleError(res, "Please provide order id")
            }

            axios.get(`https://api.cashfree.com/pg/orders/${orderId}`,{
            // axios.get(`https://sandbox.cashfree.com/pg/orders/${orderId}`, {
                headers: {
                    'x-client-id': process.env.CLIENT_ID,
                    'x-client-secret': process.env.CLIENT_SECRET,
                    'x-api-version': '2023-08-01',
                }
            }).then((response) => {
                // Verify the payment from FeedMoreEnd
                if (customer_email === "rakib100295@gmail.com" &&
                    customer_phone === "7872727290" &&
                    customer_name === "feedMore") {
                    const feedMoreUrl = process.env.feedMoreUrl
                    axios.post(`${feedMoreUrl}/api/v1/tools/payment/verify`,
                        {
                            order_id: orderId,
                            status: "Payment_Status",

                        }).then((response) => {
                            // console.log(response.data);
                        }).catch(error => {
                            console.log(error);
                        });
                }
                HandleSuccess(res, response.data, "Payment status fetched successfully");
            }).catch(error => {
                HandleError(res, error.response.data.message);
            })
        } catch (error) {
            HandleServerError(req, res, error)
        }
    }

}