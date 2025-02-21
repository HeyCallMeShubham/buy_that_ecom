"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (error, req, res, next) => {
    const message = error.message;
    const statusCode = error.statusCode;
    const data = null;
    const errors = error.errors;
    const success = false;
    const stack = error.stack;
    res.status(statusCode).json({ message: message, data: data, errors: errors, success: success, stack: stack });
};
exports.errorMiddleware = errorMiddleware;
