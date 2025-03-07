"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
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
const userModel = (0, mongoose_1.model)("user", userSchema);
exports.userModel = userModel;
