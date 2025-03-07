import { NextFunction, Request, Response } from "express"
import { ErrorHandler } from "./ErrorHandler";



const AsyncHandler = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {

    try {

        await fn(req, res, next);


    } catch (err: any) {

        console.log(err);

        next(new ErrorHandler(err.statusCode, err.message));


    }

}



export { AsyncHandler }


