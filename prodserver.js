"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var app = express();
app.use(express.static(__dirname + '/dist/MingyaoLiu'));
var port = process.env.PORT || '80';
router.get('/', function (res, req) {
    res.sendFile('index.html');
});
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
