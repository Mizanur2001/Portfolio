const {
    HandleServerError,
    HandleSuccess,
    // HandleError
} = require('./BaseController')


module.exports = {
    collectPayment: (req, res) => {
        try {
            HandleSuccess(res, "Payment Done Successfully", "This is a test message")
        } catch (error) {
            HandleServerError(res, error)
        }
    },
    verifyPayment: (req, res) => {
        try {
            HandleSuccess(res, "Payment Verified Successfully", "This is a test message")
        } catch (error) {
            HandleServerError(res, error)
        }
    }

}