import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ProductModel } from "../models/Product";


const AddProduct = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const {

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

    } = req.body

    try {


        const product = new ProductModel({

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

        
        const user = await product.save();

        console.log(user, 'user');

    } catch (err: any) {

        console.log(err);

    }

});





export { AddProduct }


