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
exports.GetProducts = void 0;
const AsyncHandler_1 = require("../utils/AsyncHandler");
const Product_1 = require("../models/Product");
const axios_1 = __importDefault(require("axios"));
const ErrorHandler_1 = require("../utils/ErrorHandler");
const ApiResponse_1 = require("../utils/ApiResponse");
const GetProducts = (0, AsyncHandler_1.AsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.ProductModel.find();
        for (let product of products) {
            yield axios_1.default.get(`http://localhost:3000/api/v1/user/findOneUser/${product.productBy}`)
                .then((response) => {
                const userData = JSON.parse(response.data.data);
                product.productBy = userData;
            }).catch((err) => {
                console.log(err);
                throw new ErrorHandler_1.ErrorHandler(err.statusCode, err.message);
            });
        }
        res.status(201).json(new ApiResponse_1.ApiResponse(201, products, "list of all products"));
    }
    catch (err) {
        console.log(err);
        throw new ErrorHandler_1.ErrorHandler(err.statusCode, err.message);
    }
}));
exports.GetProducts = GetProducts;
