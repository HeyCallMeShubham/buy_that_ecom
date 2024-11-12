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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const UserModel_1 = require("../../models/userModel.ts/UserModel");
const asyncHandler_1 = require("../../utils/asyncHandler");
const ErrorHandler_1 = require("../../utils/ErrorHandler");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const RegisterUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body;
    try {
        const isUserExist = yield UserModel_1.userModel.findOne({ email: email });
        // status code 409 is appropriate status code 
        // for existing resources
        if (isUserExist)
            return next(new ErrorHandler_1.Errorhandler(409, "User With This Email Already Exist"));
        const numberOfSaltForHashingPassword = 12;
        const hashedPassword = bcryptjs_1.default.hashSync(password, numberOfSaltForHashingPassword);
        const user = new UserModel_1.userModel({
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password: hashedPassword,
            city,
            state,
            country
        });
        if (user) {
            const profileImage = "";
        }
    }
    catch (err) {
    }
}));
exports.RegisterUser = RegisterUser;
