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
exports.Login = void 0;
const AsyncHandler_1 = require("../utils/AsyncHandler");
const ErrorHandler_1 = require("../utils/ErrorHandler");
const User_Model_1 = require("../models/user/User.Model");
const ApiResponse_1 = require("../utils/ApiResponse");
const Login = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("helllo");
    const { userName, email, userPassword } = req.body;
    try {
        const user = yield User_Model_1.userModel.findOne({ $or: [{ userName: userName }, { email: email }] });
        if (!user)
            throw new ErrorHandler_1.ErrorHandler(404, "user with this email or userName does not exist");
        const isPasswordCorrect = user.isPasswordCorrect(userPassword);
        if (!isPasswordCorrect)
            throw new ErrorHandler_1.ErrorHandler(401, "invalid user credentials");
        if (user && isPasswordCorrect) {
            const user = yield User_Model_1.userModel.findOne({ $or: [{ userName: userName }, { email: email }] }).select("-password -addressess -createdAt");
            const refreshToken = yield user.generateRefreshToken();
            const accessToken = yield user.generateAccessToken();
            res
                .status(200)
                .cookie(process.env.JWT_REFRESH_COOKIE_NAME, refreshToken, { maxAge: 86400000, httpOnly: true, secure: true })
                .cookie(process.env.JWT_ACCESS_COOKIE_NAME, accessToken, { maxAge: 3600000, httpOnly: true, secure: true })
                .json(new ApiResponse_1.ApiResponse(200, user, "login successfull"));
        }
    }
    catch (err) {
        console.log(err, 'err');
        throw new ErrorHandler_1.ErrorHandler(err.statusCode, err.message);
    }
}));
exports.Login = Login;
