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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const UserModel_1 = require("../../models/userModel.ts/UserModel");
const ErrorHandler_1 = require("../../utils/ErrorHandler");
const apiResponse_1 = require("../../utils/apiResponse");
const generateAccessAndRefreshToken_1 = require("../../utils/generateAccessAndRefreshToken");
const LoginUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, 'body.body');
    const { userName, email, userPassword } = req.body;
    try {
        const user = yield UserModel_1.userModel.findOne({ $or: [{ email: email }, { userName: userName }] });
        if (!user)
            throw new ErrorHandler_1.Errorhandler(404, 'no user with this email or username exist');
        const isCredentialsValid = user.isPasswordCorrect(userPassword);
        if (!isCredentialsValid)
            throw new ErrorHandler_1.Errorhandler(401, "invalid credentials");
        const { refreshToken, accessToken } = yield (0, generateAccessAndRefreshToken_1.generateAccessAndRefreshToken)(user);
        const _a = user._doc, { password, planStatus, addressess } = _a, rest = __rest(_a, ["password", "planStatus", "addressess"]);
        res
            .status(200)
            .cookie(process.env.JWT_REFRESH_COOKIE_NAME, refreshToken, { maxAge: 86400000, httpOnly: true, secure: true })
            .cookie(process.env.JWT_ACCESS_COOKIE_NAME, accessToken, { maxAge: 3600000, httpOnly: true, secure: true })
            .json(new apiResponse_1.ApiResponse(200, rest, "logged In Successfully"));
    }
    catch (err) {
        console.log(err);
        throw new ErrorHandler_1.Errorhandler(err.statusCode, err.message);
    }
}));
exports.LoginUser = LoginUser;
