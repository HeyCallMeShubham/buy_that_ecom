
class ApiResponse {

    statusCode: number
    data: any
    message: string | any
    success: boolean

    constructor(statusCode: number, data: any, message: string | any) {

        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 ? true : false


    }

}




export { ApiResponse }


