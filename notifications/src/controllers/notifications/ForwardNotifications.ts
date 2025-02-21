import { NextFunction, Response, Request } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { Errorhandler } from "../../utils/ErrorHandler";




export const ForwardNotifications = asyncHandler((req: Request, res: Response, next: NextFunction) => {

    try {

        throw new Errorhandler(501, 'the situation over here is not right');

    } catch (err: any) {

        console.log(err, 'ttt');

        throw new Errorhandler(err.statusCode, err.message)

    }

});


