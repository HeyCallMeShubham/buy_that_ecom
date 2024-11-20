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
exports.LoginUser = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const UserModel_1 = require("../../models/userModel.ts/UserModel");
const ErrorHandler_1 = require("../../utils/ErrorHandler");
const LoginUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    try {
        const user = yield UserModel_1.userModel.findOne({ $or: [{ email: email }, { userName: userName }] });
        if (!user)
            throw new ErrorHandler_1.Errorhandler(404, 'no user with this email or username found');
        const isCredentialsValid = user.isPasswordCorrect(password);
        console.log("correct password");
        if (!isCredentialsValid)
            throw new ErrorHandler_1.Errorhandler(401, "invalid credentials");
    }
    catch (err) {
        console.log(err);
        throw new ErrorHandler_1.Errorhandler(err.statusCode, err.message);
    }
}));
exports.LoginUser = LoginUser;
