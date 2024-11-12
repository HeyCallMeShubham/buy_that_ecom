"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    productTitle: { type: String, required: true },
    productDescription: { type: String, required: true, default: "good Product" },
    productCategory: { type: String, required: true },
    productStore: { type: String, required: true },
    productImages: [{ type: String, required: true }],
    productPrice: { type: Number, required: true },
    productDiscount: { type: Number },
    productBrand: { type: String },
    productInStocks: { type: Number, required: true, default: 1 },
});
const ProductModel = (0, mongoose_1.model)("buy_that_ecom_product", productSchema);
exports.ProductModel = ProductModel;
