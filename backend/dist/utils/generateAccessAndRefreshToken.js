"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessAndRefreshToken = void 0;
const ErrorHandler_1 = require("./ErrorHandler");
const generateAccessAndRefreshToken = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = yield user.generateRefreshToken();
        const accessToken = yield user.generateAccessToken();
        return { refreshToken, accessToken };
    }
    catch (err) {
        console.log(err);
        throw new ErrorHandler_1.Errorhandler(err.statusCode, err.message);
    }
});
exports.generateAccessAndRefreshToken = generateAccessAndRefreshToken;
