"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errorhandler = void 0;
class Errorhandler extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.Errorhandler = Errorhandler;
