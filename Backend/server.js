const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const routers = require('./routers')
dotenv.config()

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT


//Stablishing  the Router
app.use('/', routers)


app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
});