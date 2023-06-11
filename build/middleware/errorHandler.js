"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Errorhandler = (err, req, res, next) => {
    const message = err.message || "Something went wrong";
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message,
        success: false,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
};
exports.default = Errorhandler;
