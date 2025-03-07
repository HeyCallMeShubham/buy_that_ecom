

class ErrorHandler extends Error {

    statusCode: number
    message: string

    constructor(statusCode: number, message: string) {

        console.log(statusCode, 'statototocode')

        super();

        this.statusCode = statusCode;
        this.message = message;

    }

}


export { ErrorHandler }

