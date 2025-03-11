
import mongoose, { Model, Schema, InferSchemaType, model } from "mongoose";



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




const ProductSchema = new Schema<IProduct>({

    productTitle: { type: String, required: true },
    productDescription: { type: String, required: true },
    productImages: { type: [String], required: true },
    productStore: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDiscount: { type: Number },
    productCategory: { type: String, required: true },
    productBrand: { type: String, required: true },
    productInStocks: { type: Number, required: true },

});



const ProductModel = model<IProduct>("buy_that_ecom_product", ProductSchema)



export { ProductModel }


