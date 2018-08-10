"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var upload_1 = require("./upload");
var app = express();
var corsMiddleware = cors({
    origin: ['http://localhost:3000/', 'http://localhost:4200']
});
app.use(corsMiddleware);
app.options('*', corsMiddleware);
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.post('/receive', upload_1["default"].single('avatar'), function (req, res) {
    try {
        var message = "Arquivo enviado com sucesso: " + req.file.filename;
        res.send(message);
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(3000, function () {
    console.log('listening on port 3000!');
});
