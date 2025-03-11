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
const User_Model_1 = require("../models/User.Model");
const Login = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, email, password } = req.body;
    try {
        const user = yield User_Model_1.userModel.findOne({ $or: [{ userName: userName }, { email: email }] });
        if (!user)
            throw new ErrorHandler_1.ErrorHandler(404, "user with this email or userName does not exist");
        const isPasswordCorrect = user.isPasswordCorrect(password);
    }
    catch (err) {
        console.log(err, 'err');
        throw new ErrorHandler_1.ErrorHandler(err.statusCode, err.message);
    }
}));
exports.Login = Login;
