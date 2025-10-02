const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html for valid frontend routes
const validRoutes = ['/', '/privacy', '/pricing', '/pay', '/cv', '/terms', '/refund', '/shipping', '/razorpay/pay'];

app.get(validRoutes, function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// For all other routes, serve index.html with 404 status
app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(2000, () => {
    console.log("listen on port 2000")
});