
import { Request, Response } from "express";
import multer from "multer";
import { ErrorHandler } from "../utils/ErrorHandler";


const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        try {
            
            console.log(req, 'req.file1');

            return callback(null, "../images");

        } catch (err: any) {

            console.log(err, 'error');

            throw new ErrorHandler(err?.statusCode, err.message);

        }
    },


    
    filename: (req, file, callback) => {

        try {
            
            console.log(req, 'req.file2');

            return callback(null, Date.now() + "_" + file.originalname);

        } catch (err: any) {

            console.log(err, 'err');

            throw new ErrorHandler(err?.statusCode, err.message);

        }

    }

});





const upload = multer({ storage });



export { upload }




