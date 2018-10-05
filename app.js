"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var app = express();
var port = process.env.PORT || '80';
router.get('/', function (res, req) {
    res.sendFile('dist/MingyaoLiu/index.html');
});
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
