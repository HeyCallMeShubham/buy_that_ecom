"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
// ✅ Fix: Ensure a database name is provided in the connection string
const productDb = mongoose_1.default.createConnection("mongodb+srv://shubhamkumarin2022:jlepX5mYYeJXpAPi@buythatecomproducts.wajnk.mongodb.net/productsDb");
const userDb = mongoose_1.default.createConnection("mongodb+srv://buythatecom_user:buythatecomuserpassword@buythatecom.6fdkl.mongodb.net/usersDb");
// ✅ Fix: Define an Enum Properly
var planStatus;
(function (planStatus) {
    planStatus["NONE"] = "NONE";
    planStatus["BASIC"] = "BASIC";
    planStatus["PREMIUM"] = "PREMIUM";
})(planStatus || (planStatus = {}));
// ✅ User Schema in `usersDb`
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
    createdAt: { type: Date, default: Date.now }
});
// ✅ Export User Model from `usersDb`
const UserModel = userDb.model("User", userSchema);
exports.UserModel = UserModel;
// ✅ Fix: Reference the User Model with a String in `ref`
const productSchema = new mongoose_1.Schema({
    productTitle: { type: String, required: true },
    productDescription: { type: String, required: true },
    productImages: { type: [String], required: true },
    productStore: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDiscount: { type: Number },
    productCategory: { type: String, required: true },
    productBrand: { type: String, required: true },
    productInStocks: { type: Number, required: true },
    productBy: { type: mongoose_1.Schema.Types.ObjectId, ref: UserModel, required: true } // ✅ Fix: Use model name as a string
});
// ✅ Export Product Model from `productsDb`
const ProductModel = productDb.model("Product", productSchema);
exports.ProductModel = ProductModel;
