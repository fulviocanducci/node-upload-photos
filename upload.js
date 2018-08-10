"use strict";
exports.__esModule = true;
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var uploads = multer({ storage: storage });
exports["default"] = uploads;
