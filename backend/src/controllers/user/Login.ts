
import { NextFunction, Request, Response } from "express";

import { asyncHandler } from "../../utils/asyncHandler";

import { userModel } from "../../models/userModel.ts/UserModel";

import bcrypt from "bcryptjs";
import { Errorhandler } from "../../utils/ErrorHandler";





const LoginUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const { userName, email, password } = req.body

    try {


        const user: any = await userModel.findOne({ $or: [{ email: email }, { userName: userName }] });

        if (!user) throw new Errorhandler(404, 'no user with this email or username exist');

        const isCredentialsValid: boolean = user.isPasswordCorrect(password);

        if (!isCredentialsValid) throw new Errorhandler(401, "invalid credentials");



    } catch (err: any) {

        console.log(err);

        throw new Errorhandler(err.statusCode, err.message);
    }

});




export { LoginUser }




