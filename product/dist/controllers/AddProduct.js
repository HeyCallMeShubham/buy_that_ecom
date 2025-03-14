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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProduct = void 0;
const AsyncHandler_1 = require("../utils/AsyncHandler");
const Product_1 = require("../models/Product");
const AddProduct = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productTitle, productDescription, productImages, productStore, productPrice, productDiscount, productCategory, productBrand, productInStocks, productBy, } = req.body;
    try {
        const product = new Product_1.ProductModel({
            productTitle,
            productDescription,
            productImages,
            productStore,
            productPrice,
            productDiscount,
            productCategory,
            productBrand,
            productInStocks,
            productBy,
        });
        const user = yield product.save();
        console.log(user, 'user');
    }
    catch (err) {
        console.log(err);
    }
}));
exports.AddProduct = AddProduct;
