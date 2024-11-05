
import express, { NextFunction, Request, Response } from "express";



const asyncHandler = (requestHandler: any) => {

    (req: Request, res: Response, next: NextFunction) => {

        Promise.resolve(requestHandler(req, res, next))
            .catch((err: any) => next(err));

    }

}

export { asyncHandler }
