import { NextFunction, Request, Response } from "express";

const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {


  console.log('its working');

  const message: string = error.message
  const statusCode: number = error.statusCode
  const data: null | undefined = null
  const errors: any[] = error.errors
  const success: boolean = false
  const stack: any = error.stack

  

  res.status(statusCode).json({

    message: message,
    statusCode: statusCode,
    data: data,
    errors: errors,
    success: success,
    stack: stack

  })

}



export { errorMiddleware }


