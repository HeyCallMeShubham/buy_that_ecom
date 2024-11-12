
import { Schema, model } from "mongoose";


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
    profileImage: string
    city: string
    state: string
    country: string
    addresses: any[]

}





const userSchema = new Schema<IUser>({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    profileImage: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    planStatus: { type: String, default: planStatus.NONE },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    addresses: [{ type: String, default:'add address'}]

});


const userModel = model<IUser>("buy_that_ecom_user", userSchema)


export { userModel }

