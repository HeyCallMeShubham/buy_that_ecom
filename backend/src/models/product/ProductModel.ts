
import { Schema, model, Document } from "mongoose";


interface IProduct {

    productTitle: string
    productDescription: string
    productImages: string[]
    productStore: string
    productPrice: number
    productDiscount: number
    productCategory: string
    productBrand: string
    productInStocks: number

}





const productSchema = new Schema<IProduct>({

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





const ProductModel = model<IProduct>("buy_that_ecom_product", productSchema);



export { ProductModel }



