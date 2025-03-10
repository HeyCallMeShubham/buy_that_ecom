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
exports.uploadOnCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
}))();
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
});
const filePathToRemoveFrom = path_1.default.resolve(__dirname, `../images`);
const uploadOnCloudinary = (filePath, filename) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uploadResult = yield cloudinary_1.v2.uploader.upload(filePath, {
            use_filename: true,
            unique_filename: false,
            overwrites: true
        });
        console.log(uploadResult, "uploadoncli");
        return uploadResult;
    }
    catch (err) {
        console.log(err);
        fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${filename}`);
    }
});
exports.uploadOnCloudinary = uploadOnCloudinary;
