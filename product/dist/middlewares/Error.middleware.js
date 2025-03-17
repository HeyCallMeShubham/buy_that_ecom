"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const ErrorMiddleware = (err, req, res, next) => {
    try {
        const message = err.message;
        const statusCode = err.statusCode;
        const data = err.data;
        const stack = err.stack;
        const errors = err.errors;
        const success = false;
        res.status(statusCode).json({
            message,
            statusCode,
            data,
            stack,
            errors,
            success
        });
    }
    catch (err) {
        console.log(err, 'middleware Log');
    }
};
exports.ErrorMiddleware = ErrorMiddleware;
