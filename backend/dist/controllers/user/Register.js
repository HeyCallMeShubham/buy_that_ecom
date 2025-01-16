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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("../../services/cloudinary");
const apiResponse_1 = require("../../utils/apiResponse");
const RegisterUser = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body;
    console.log(req.body, 'req.body');
    console.log(req.file, 'req.file');
    const filePathToRemoveFrom = path_1.default.resolve(__dirname, "../../images");
    try {
        const isUserExist = yield UserModel_1.userModel.findOne({ email: email });
        // status code 409 is appropriate status code 
        // for existing resources
        if (isUserExist) {
            fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.filename}`);
            throw new ErrorHandler_1.Errorhandler(409, "User With This Email Already Exist");
        }
        ;
        const user = new UserModel_1.userModel({
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
            const profileImage = yield (0, cloudinary_1.uploadOnCloudinary)((_b = req.file) === null || _b === void 0 ? void 0 : _b.path, (_c = req.file) === null || _c === void 0 ? void 0 : _c.filename);
            user.profileImage = profileImage.url;
            const createdUser = yield user.save();
            if (createdUser) {
                fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${(_d = req.file) === null || _d === void 0 ? void 0 : _d.filename}`);
                res.status(201).json(new apiResponse_1.ApiResponse(201, {}, "User Has Been Registerd Sucessfully "));
            }
        }
    }
    catch (err) {
        //fs.unlinkSync(`${filePathToRemoveFrom}/${req.file?.filename}`);
        throw new ErrorHandler_1.Errorhandler(err.statusCode, err.message);
    }
}));
exports.RegisterUser = RegisterUser;
