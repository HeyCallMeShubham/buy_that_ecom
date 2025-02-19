import { NextFunction, Request, Response } from "express"


export const asyncHandler = (func: any) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            await func(req, res, next)


        } catch (err: any) {

            console.log(err);

            res.status(err.status || 500).json({

                success: false,
                message: err.message

            })

        }

    }

}






















