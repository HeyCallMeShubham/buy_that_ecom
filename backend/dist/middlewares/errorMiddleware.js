"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    console.log(err, 'statu');
    const status = err.statusCode;
    const message = err.message;
    const data = null;
    const errors = err.errors;
    const success = false;
    const stack = null;
    res.status(status).json({
        statusCode: status,
        message: message,
        success: success,
        stack: stack,
        data: data,
    });
};
exports.errorMiddleware = errorMiddleware;
