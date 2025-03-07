"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errorMiddleware = (err, req, res, next) => {
    try {
        console.log("entire error obj", err);
        const message = err.message || "internal server error";
        const statusCode = err.statusCode || 500;
        const data = err.data;
        const errors = err.errors;
        const stack = err.stack;
        const success = false;
        res.status(statusCode).json({
            message,
            statusCode,
            data,
            errors,
            stack,
            success
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.errorMiddleware = errorMiddleware;
