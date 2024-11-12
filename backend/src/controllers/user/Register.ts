import { NextFunction, Request, Response } from "express";
import { userModel } from "../../models/userModel.ts/UserModel";
import { asyncHandler } from "../../utils/asyncHandler";
import { Errorhandler } from "../../utils/ErrorHandler";
import bcrypt from "bcryptjs"

import { v2 as cloudinary } from "cloudinary"



const RegisterUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {


    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body



    try {

        const isUserExist = await userModel.findOne({ email: email })

        // status code 409 is appropriate status code 
        // for existing resources

        if (isUserExist) return next(new Errorhandler(409, "User With This Email Already Exist"));


        const numberOfSaltForHashingPassword: number = 12


        const hashedPassword: string = bcrypt.hashSync(password, numberOfSaltForHashingPassword);


        const user = new userModel({

            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password: hashedPassword,
            city,
            state,
            country

        });

        if (user) {

            const profileImage = ""


        }






    } catch (err: any) {



    }

})





export { RegisterUser }



