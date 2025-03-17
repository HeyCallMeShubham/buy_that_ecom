import { NextFunction, Request, Response } from "express";

interface iError extends Error {

    statusCode: number
    data: null | undefined
    errors: any[]
    stack: any

}

const ErrorMiddleware = (err: iError, req: Request, res: Response, next: NextFunction) => {

    try {

        const message: string | undefined = err.message
        const statusCode: number | undefined = err.statusCode
        const data: null | undefined = err.data
        const stack: any | undefined = err.stack
        const errors: any[] | undefined = err.errors
        const success: boolean | undefined = false

        res.status(statusCode).json({

            message,
            statusCode,
            data,
            stack,
            errors,
            success

        })


    } catch (err: any) {

        console.log(err, 'middleware Log');

    }

}



export { ErrorMiddleware }



