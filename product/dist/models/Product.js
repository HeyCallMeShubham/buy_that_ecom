"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
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
    productBy: { type: mongoose_1.Schema.Types.Mixed, required: true }
});
const ProductModel = (0, mongoose_1.model)("Product", productSchema);
exports.ProductModel = ProductModel;
