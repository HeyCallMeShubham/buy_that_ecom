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
const ErrorHandler_1 = require("../utils/ErrorHandler");
const User_Model_1 = require("../models/User.Model");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("../service/cloudinary");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const AsyncHandler_1 = require("../utils/AsyncHandler");
const RegisterUser = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body;
    try {
        const filePathToRemoveFrom = path_1.default.resolve(__dirname, "../images");
        const userExist = yield User_Model_1.userModel.findOne({ email: email });
        if (userExist) {
            if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) {
                const filePathToRemove = `${filePathToRemoveFrom}/${req.file.filename}`;
                fs_1.default.unlinkSync(filePathToRemove);
            }
            throw new ErrorHandler_1.ErrorHandler(409, "user with this email already registered");
        }
        const salt = yield bcryptjs_1.default.genSaltSync(12);
        const hashedPassword = yield bcryptjs_1.default.hashSync(password, salt);
        const user = new User_Model_1.userModel({
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password,
            city,
            state,
            country
        });
        if (user) {
            const uploadedImage = yield (0, cloudinary_1.uploadOnCloudinary)((_b = req.file) === null || _b === void 0 ? void 0 : _b.path, (_c = req === null || req === void 0 ? void 0 : req.file) === null || _c === void 0 ? void 0 : _c.filename);
            user.profileImage = uploadedImage === null || uploadedImage === void 0 ? void 0 : uploadedImage.url;
            const createdUser = yield user.save();
            if (createdUser) {
                if ((_d = req.file) === null || _d === void 0 ? void 0 : _d.filename) {
                    fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${(_e = req.file) === null || _e === void 0 ? void 0 : _e.filename}`);
                }
                ;
                console.log("user created succesffuyl");
            }
            ;
        }
        ;
    }
    catch (err) {
        console.log(err, 'error in register cntlr');
        throw new ErrorHandler_1.ErrorHandler(err.statusCode, err.message);
    }
}));
exports.RegisterUser = RegisterUser;
