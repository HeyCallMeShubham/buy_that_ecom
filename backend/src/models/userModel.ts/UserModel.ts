
import { InferSchemaType, Model, Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { NextFunction } from "express";



enum planStatus {

    NONE = "NONE",
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"

}





interface IUser {

    firstName: string
    lastName: string
    userName: string
    email: string
    planStatus: planStatus
    phoneNumber: number
    password: string
    profileImage: string
    city: string
    state: string
    country: string
    addresses: any[]

}





interface InstanceMethods {

    isPasswordCorrect: (password: string) => string;

    generateSalt: (saltRounds: number) => string;

    hashThePassword: (saltRounds: number) => string;

}





interface IModel extends Model<IUser, InstanceMethods> {

    isPasswordCorrect: (password: string) => string;

    generateSalt: (saltRounds: number) => string;

    hashThePassword: (password: string) => string;

}





const userSchema = new Schema<IUser, InstanceMethods>({


    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    userName: { type: String, required: true },

    email: { type: String, required: true },

    profileImage: { type: String, required: true },

    phoneNumber: { type: Number, required: true },

    password: { type: String, required: true },

    planStatus: { type: String, default: planStatus.NONE },

    city: { type: String, required: true },

    state: { type: String, required: true },

    country: { type: String, required: true },

    addresses: [{ type: String, default: 'add address' }]


});



userSchema.methods.generateSalt = function (saltRounds: number) {

    const salt: string = bcrypt.genSaltSync(saltRounds);

    return salt

};





userSchema.methods.hashThePassword = function (password: string) {

    const salt = this.generateSalt(12)

    return bcrypt.hashSync(this.password, salt)

}





userSchema.methods.isPasswordCorrect = function (password: string) {
 
   const isPasswordCorrect:boolean = bcrypt.compareSync(password, this.password); 

   return isPasswordCorrect

}











userSchema.pre("save", function (next) {

    const user: any = this;

    const userPassword = user.password;

    const hashedPassword = user.hashThePassword(userPassword);

    this.password = hashedPassword;

    next();

});




type user = InferSchemaType<typeof userSchema>;




const userModel = model<user, IModel>("buy_that_ecom_user", userSchema)



export { userModel };


