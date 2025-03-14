import { NextFunction, Request, Response } from "express";
import { userModel } from "../../models/userModel.ts/UserModel";
import { asyncHandler } from "../../utils/asyncHandler";
import { Errorhandler } from "../../utils/ErrorHandler";
import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { uploadOnCloudinary } from "../../services/cloudinary";
import { ApiResponse } from "../../utils/apiResponse";



const RegisterUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body

    console.log(req.file, 'req.file');

    console.log(req.body, 'req.body');


    const filePathToRemoveFrom = path.resolve(__dirname, "../../images");


    try {

        const isUserExist = await userModel.findOne({ email: email });

        // status code 409 is appropriate status code 
        // for existing resources

        if (isUserExist) {

            fs.unlinkSync(`${filePathToRemoveFrom}/${req.file?.filename}`);

            throw new Errorhandler(409, "User With This Email Already Exist");

        };



        const user = new userModel({

            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password,
            city,
            state,
            country

        });



        if (user) {

            const profileImage: any = await uploadOnCloudinary(req.file?.path, req.file?.filename);

            user.profileImage = profileImage.url;

            const createdUser = await user.save();


            if (createdUser) {

                fs.unlinkSync(`${filePathToRemoveFrom}/${req.file?.filename}`);

                res.status(201).json(new ApiResponse(201, {}, "User Has Been Registerd Sucessfully "));

            }

        }

    } catch (err: any) {

        //fs.unlinkSync(`${filePathToRemoveFrom}/${req.file?.filename}`);

        throw new Errorhandler(err.statusCode, err.message);

    }

});





export { RegisterUser }



