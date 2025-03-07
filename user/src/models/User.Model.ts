
import mongoose, { Schema, Document, Date, InferSchemaType, model } from "mongoose";


enum planStatus {

    NONE = "NONE",
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"

}



interface IUser extends Document {

    firstName: string
    lastName: string
    userName: string
    email: string
    phoneNumber: string
    planStatus: planStatus
    password: string
    profileImage: string
    city: string
    state: string
    country: string
    addresses: any[]
    createdAt: Date



}





const userSchema = new Schema<IUser>({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    planStatus: { type: String, default: planStatus.NONE },
    profileImage: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },

});





// inferSchemaType function analyzes a value and returns the 
// corresponding mongoose schema type, 
// here for example we are passing an object, or an nested schema
// here it will return an object nested schema type



type user = InferSchemaType<typeof userSchema>;



const userModel = model<user>("user", userSchema);


export { userModel }












