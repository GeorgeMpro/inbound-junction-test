//import path package
const path = require('path');
const express = require('express');
const app = express();

// Serve only the static files from the dist directory
app.use("/", express.static(path.join(__dirname, "dist/inbound-junction-test")));

// Note: no need for headers, run on one app

// return the angular app - index.html
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "dist/inbound-junction-test", "index.html"));
});

module.exports = app;
