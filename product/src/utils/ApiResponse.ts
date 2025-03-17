
class ApiResponse {

    data: any
    message: string
    success: boolean
    statusCode: number


    constructor(statusCode: number, data: any, message: string) {

        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 || 300 ? true : false
    }


}



export { ApiResponse }