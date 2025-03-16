import { NextFunction, Request, Response } from "express";
import { AsyncHandler } from "../utils/AsyncHandler";
import { userModel } from "../models/user/User.Model";
import { ErrorHandler } from "../utils/ErrorHandler";
import { ApiResponse } from "../utils/ApiResponse";




const GetUserById = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    try {

        const user = await userModel.findById(req.params.userid).select("-password -createdAt");

        if (!user) throw new ErrorHandler(404, "no user is found");

        return res.status(201).json(new ApiResponse(201, JSON.stringify(user), ""));

    } catch (err: any) {

        console.log(err);

        throw new ErrorHandler(err.statusCode, err.message);

    }

});



export { GetUserById }




