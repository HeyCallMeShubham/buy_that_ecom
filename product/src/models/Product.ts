
import mongoose, { Model, Schema, InferSchemaType, model, ObjectId, Document, Mixed } from "mongoose";


interface IProduct extends Document {

    productTitle: string;
    productDescription: string;
    productImages: string[];
    productStore: string;
    productPrice: number;
    productDiscount?: number;
    productCategory: string;
    productBrand: string;
    productInStocks: number;
    productBy: string | ObjectId | Mixed;

}







const productSchema = new Schema<IProduct>({

    productTitle: { type: String, required: true },
    productDescription: { type: String, required: true },
    productImages: { type: [String], required: true },
    productStore: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDiscount: { type: Number },
    productCategory: { type: String, required: true },
    productBrand: { type: String, required: true },
    productInStocks: { type: Number, required: true },
    productBy: { type: Schema.Types.Mixed, required: true } 

});





const ProductModel = model<IProduct>("Product", productSchema);



export { ProductModel };


