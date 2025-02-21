import { NextFunction, Request, Response } from "express"
import { Errorhandler } from "./ErrorHandler";


export const asyncHandler = (func: any) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {


            await func(req, res, next);


        } catch (err: any) {

            console.log(err);

            next(new Errorhandler(err.statusCode, err.message));


        }

    }

}






















