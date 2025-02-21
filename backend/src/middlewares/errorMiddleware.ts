import { NextFunction, Request, Response } from "express";


const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {

    console.log(err, 'error');

    const status: number = err.statusCode;
    const message: string = err.message;
    const data: undefined | null = null;
    const errors: any[] | any = err.errors;
    const success: boolean = false;
    const stack: null = null;



    res.status(status).json({

        statusCode: status,
        message: message,
        success: success,
        stack: stack,
        data: data,

    });


}


export { errorMiddleware }

