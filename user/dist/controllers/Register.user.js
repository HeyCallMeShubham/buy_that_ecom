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
const AsyncHandler_1 = require("../utils/AsyncHandler");
const ApiResponse_1 = require("../utils/ApiResponse");
const RegisterUser = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body;
    try {
        const filePathToRemoveFrom = path_1.default.resolve(__dirname, "../images");
        const userExist = yield User_Model_1.userModel.findOne({ email: email });
        if (userExist) {
            if ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) {
                if (`${filePathToRemoveFrom}/${(_b = req.file) === null || _b === void 0 ? void 0 : _b.filename}`) {
                    fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${(_c = req.file) === null || _c === void 0 ? void 0 : _c.filename}`);
                }
            }
            throw new ErrorHandler_1.ErrorHandler(409, "user with this email already registered");
        }
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
            const uploadedImage = yield (0, cloudinary_1.uploadOnCloudinary)((_d = req.file) === null || _d === void 0 ? void 0 : _d.path, (_e = req === null || req === void 0 ? void 0 : req.file) === null || _e === void 0 ? void 0 : _e.filename);
            user.profileImage = uploadedImage === null || uploadedImage === void 0 ? void 0 : uploadedImage.url;
            const createdUser = yield user.save();
            if (createdUser) {
                if ((_f = req.file) === null || _f === void 0 ? void 0 : _f.filename) {
                    if (`${filePathToRemoveFrom}/${(_g = req.file) === null || _g === void 0 ? void 0 : _g.filename}`) {
                        fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${(_h = req.file) === null || _h === void 0 ? void 0 : _h.filename}`);
                    }
                }
                ;
                res.status(200).json(new ApiResponse_1.ApiResponse(200, {}, "user registered successfully"));
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
