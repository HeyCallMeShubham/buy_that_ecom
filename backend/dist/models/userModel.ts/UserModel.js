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
    email: { type: String, required: true },
    profileImage: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    planStatus: { type: String, default: planStatus.NONE },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    addresses: [{ type: String, default: 'add address' }]
});
const userModel = (0, mongoose_1.model)("buy_that_ecom_user", userSchema);
exports.userModel = userModel;
