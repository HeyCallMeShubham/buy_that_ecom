
import express, { NextFunction, Request, Response } from "express";


const asyncHandler = (fn: Function) => async (req: Request, res: Response, next: NextFunction) => {

    try {

        await fn(req, res, next);

    } catch (err: any) {

        console.log(err, 'cause');

        res.status(err.statusCode || 500).json({

            success: false,
            message: err.message

        });

    }

}





export { asyncHandler }


