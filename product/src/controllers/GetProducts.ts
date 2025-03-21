
import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ProductModel } from "../models/Product";
import axios from "axios";
import { ErrorHandler } from "../utils/ErrorHandler";
import { ApiResponse } from "../utils/ApiResponse";

const GetProducts = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    try {

        const products = await ProductModel.find();

        for (let product of products) {

            await axios.get(`http://localhost:3000/api/v1/user/findOneUser/${product.productBy}`)
                .then((response: any) => {

                    const userData = JSON.parse(response.data.data);

                    product.productBy = userData;

                }).catch((err: any) => {

                    console.log(err);

                    throw new ErrorHandler(err.statusCode, err.message);

                });

        }


        res.status(201).json(new ApiResponse(201, products, "list of all products"));

    } catch (err: any) {

        console.log(err);

        throw new ErrorHandler(err.statusCode, err.message);

    }

});


export { GetProducts }

