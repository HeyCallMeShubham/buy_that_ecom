import { Request, Response, NextFunction } from "express"
import { AsyncHandler } from "../utils/AsyncHandler"
import { ErrorHandler } from "../utils/ErrorHandler";
import { userModel } from "../models/user/User.Model";
import { ApiResponse } from "../utils/ApiResponse";


const Login = AsyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    console.log("helllo");

    const { userName, email, userPassword } = req.body;



    try {

        const user: any = await userModel.findOne({ $or: [{ userName: userName }, { email: email }] });

        if (!user) throw new ErrorHandler(404, "user with this email or userName does not exist");

        const isPasswordCorrect = user.isPasswordCorrect(userPassword);

        if (!isPasswordCorrect) throw new ErrorHandler(401, "invalid user credentials")


        if (user && isPasswordCorrect) {

            const user: any = await userModel.findOne({ $or: [{ userName: userName }, { email: email }] }).select("-password -addressess -createdAt");

            const refreshToken = await user.generateRefreshToken();

            const accessToken = await user.generateAccessToken();

            res
                .status(200)
                .cookie(process.env.JWT_REFRESH_COOKIE_NAME as string, refreshToken, { maxAge: 86400000, httpOnly: true, secure: true })
                .cookie(process.env.JWT_ACCESS_COOKIE_NAME as string, accessToken, { maxAge: 3600000, httpOnly: true, secure: true })
                .json(new ApiResponse(200, user, "login successfull"));

        }

    } catch (err: any) {

        console.log(err, 'err');

        throw new ErrorHandler(err.statusCode, err.message);

    }

});



export { Login }

