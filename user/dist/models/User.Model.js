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
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var planStatus;
(function (planStatus) {
    planStatus["NONE"] = "NONE";
    planStatus["BASIC"] = "BASIC";
    planStatus["PREMIUM"] = "PREMIUM";
})(planStatus || (planStatus = {}));
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    planStatus: { type: String, default: planStatus.NONE },
    profileImage: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
});
userSchema.methods.generateRefreshToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const JWT_REFRESH_TOKEN_SECRETKEY = process.env.JWT_REFRESH_TOKEN_SECRETKEY;
        const refreshToken = jsonwebtoken_1.default.sign({ id: this._id, email: this.email, number: this.number }, JWT_REFRESH_TOKEN_SECRETKEY, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY });
        return refreshToken;
    });
};
userSchema.methods.generateAccessToken = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const JWT_ACCESS_TOKEN_SECRETKEY = process.env.JWT_ACCESS_TOKEN_SECRETKEY;
        const accessToken = jsonwebtoken_1.default.sign({ id: this._id, email: this.email, number: this.number }, JWT_ACCESS_TOKEN_SECRETKEY, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY });
        return accessToken;
    });
};
userSchema.methods.hashThePassword = function (password) {
    const salt = bcryptjs_1.default.genSaltSync(12);
    return bcryptjs_1.default.hashSync(password, salt);
};
userSchema.methods.isPasswordCorrect = function (password) {
    const isPasswordCorrect = bcryptjs_1.default.compareSync(password, this.password);
    return isPasswordCorrect;
};
userSchema.pre("save", function (next) {
    const user = this;
    const hashedPassword = user.hashThePassword(user.password);
    this.password = hashedPassword;
    next();
});
const userModel = (0, mongoose_1.model)("user", userSchema);
exports.userModel = userModel;
