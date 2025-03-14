
import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ProductModel } from "../models/Product";


const GetProducts = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    try {

        const products = await ProductModel.find().populate("productBy");

        console.log(products, 'users');

        res.send(products);    

    } catch (err: any) {

        console.log(err);

    }

});





export { GetProducts }


