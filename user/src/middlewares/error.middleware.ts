import { Request, Response, NextFunction } from "express"


const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {

    try{

        
        console.log("entire error obj", err)
    
        const message: string = err.message || "internal server error";
        const statusCode: number = err.statusCode || 500;
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

    }catch(err:any){

        console.log(err);

    }




}



export { errorMiddleware }

