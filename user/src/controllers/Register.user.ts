

import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../utils/ErrorHandler";
import { userModel } from "../models/User.Model";
import path from "path";
import fs from "fs";
import { uploadOnCloudinary } from "../service/cloudinary";
import bcrypt from "bcryptjs";
import { AsyncHandler } from "../utils/AsyncHandler";
import { ApiResponse } from "../utils/ApiResponse";


const RegisterUser = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {


    const { firstName, lastName, userName, email, phoneNumber, password, city, state, country } = req.body;

    try {

        const filePathToRemoveFrom: string = path.resolve(__dirname, "../images");

        const userExist: any = await userModel.findOne({ email: email });


        if (userExist) {

            if (req.file?.filename) {

                const filePathToRemove = `${filePathToRemoveFrom}/${req.file.filename}`;

                fs.unlinkSync(filePathToRemove);

            }

            throw new ErrorHandler(409, "user with this email already registered");

        }

        const salt = await bcrypt.genSaltSync(12);

        const hashedPassword = await bcrypt.hashSync(password, salt);

        const user: any = new userModel({

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

            const uploadedImage = await uploadOnCloudinary(req.file?.path, req?.file?.filename);

            user.profileImage = uploadedImage?.url;

            const createdUser: any = await user.save();

            if (createdUser) {

                if (req.file?.filename) {

                    if(`${filePathToRemoveFrom}/${req.file?.filename}`){

                        fs.unlinkSync(`${filePathToRemoveFrom}/${req.file?.filename}`);

                    }


                };


                res.status(200).json(new ApiResponse(200, {}, "user registered successfully"));

            };

        };

    } catch (err: any) {

        console.log(err, 'error in register cntlr');

        throw new ErrorHandler(err.statusCode, err.message);

    }

}


)


export { RegisterUser };


