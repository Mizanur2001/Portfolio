const express = require('express')
const router = express.Router()
const toolsRouter = require('./toolsRouter')


//Server Test api
router.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        code: 200,
        message: "API Server is Running Successfully"
    })
})


router.use('/api/v1/tools', toolsRouter)




module.exports = router