import { Request, Response, NextFunction } from "express"


const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {

    const message: string = err.message;
    const statusCode: number = err.statusCode;
    const data: null | undefined = err.data;
    const errors: any[] = err.errors;
    const stack: any[] = err.stack;
    const success: boolean = false;



    res.status(statusCode).json({

        message,
        statusCode,
        data,
        errors,
        stack,
        success

    });

    

}



export { errorMiddleware }

