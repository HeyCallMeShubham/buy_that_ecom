
import mongoose, { Schema, Document, Date, InferSchemaType, model, Model } from "mongoose";
import bcrypt from "bcryptjs";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ErrorHandler } from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";


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







interface InstanceMethods {

    isPasswordCorrect: (password: string) => string;

    hashThePassword: (password: string) => string;

    generateAccessToken: () => string;

    generateRefreshToken: () => string;

}







interface IModel extends Model<IUser, InstanceMethods> {

    isPasswordCorrect: (password: string) => string;

    hashThePassword: (password: string) => string;

    generateAccessToken: () => string;

    generateRefreshToken: () => string;

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





userSchema.methods.generateRefreshToken = async function () {

    const JWT_REFRESH_TOKEN_SECRETKEY: string | undefined = process.env.JWT_REFRESH_TOKEN_SECRETKEY

    const refreshToken = jwt.sign({ id: this._id, email: this.email, number: this.number }, JWT_REFRESH_TOKEN_SECRETKEY as string, { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY as any });

    return refreshToken;


};



userSchema.methods.generateAccessToken = async function () {

    const JWT_ACCESS_TOKEN_SECRETKEY: string | undefined = process.env.JWT_ACCESS_TOKEN_SECRETKEY

    const accessToken = jwt.sign({ id: this._id, email: this.email, number: this.number }, JWT_ACCESS_TOKEN_SECRETKEY as string, { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY as any });

    return accessToken;


};



userSchema.methods.hashThePassword = function (password: string) {

    const salt = bcrypt.genSaltSync(12);

    return bcrypt.hashSync(password, salt);

}



userSchema.methods.isPasswordCorrect = function (password: string) {

    const isPasswordCorrect: boolean = bcrypt.compareSync(password, this.password);

    return isPasswordCorrect

}





userSchema.pre("save", function (next) {

    const user: any = this

    const hashedPassword = user.hashThePassword(user.password);


    this.password = hashedPassword

    next();

});






// inferSchemaType function analyzes a value and returns the 
// corresponding mongoose schema type, 
// here for example we are passing an object, or an nested schema
// here it will return an object nested schema type

type user = InferSchemaType<typeof userSchema>;



const userModel = model<user, IModel>("user", userSchema);




export { userModel }






