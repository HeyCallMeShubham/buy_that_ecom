
import { NextFunction, Request, Response } from "express";

import { asyncHandler } from "../../utils/asyncHandler";

import { userModel } from "../../models/userModel.ts/UserModel";

import bcrypt from "bcryptjs";

import { Errorhandler } from "../../utils/ErrorHandler";

import { ApiResponse } from "../../utils/apiResponse";

import { generateAccessAndRefreshToken } from "../../utils/generateAccessAndRefreshToken";





const LoginUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    console.log(req.body, 'body.body');

    const { userName, email, userPassword } = req.body


    try {
    

        const user: any = await userModel.findOne({ $or: [{ email: email }, { userName: userName }] });


        if (!user) throw new Errorhandler(404, 'no user with this email or username exist');
        
        
        const isCredentialsValid: boolean = user.isPasswordCorrect(userPassword);

        
        if (!isCredentialsValid) throw new Errorhandler(401, "invalid credentials");
        

        const { refreshToken, accessToken } = await generateAccessAndRefreshToken(user);


        const { password, planStatus, addressess, ...rest } = user._doc;


        res
            .status(200)
            .cookie(process.env.JWT_REFRESH_COOKIE_NAME as string, refreshToken, { maxAge: 86400000, httpOnly: true, secure: true })
            .cookie(process.env.JWT_ACCESS_COOKIE_NAME as string, accessToken, { maxAge: 3600000, httpOnly: true, secure: true })
            .json(new ApiResponse(200, rest, "logged In Successfully"))

    } catch (err: any) {

        console.log(err);

        throw new Errorhandler(err.statusCode, err.message);
    }

});




export { LoginUser }




