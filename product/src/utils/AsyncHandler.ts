import { NextFunction, Request, Response } from "express";



const AsyncHandler = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {

    try {


        await fn(req, res, next);


    } catch (err: any) {

        next(err);

    }

}





export { AsyncHandler }