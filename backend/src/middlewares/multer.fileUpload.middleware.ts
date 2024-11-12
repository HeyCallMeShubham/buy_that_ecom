import fs from 'fs';
import path, { dirname } from 'path';
import multer from "multer"



const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        try {

            console.log(file, 'file1');

            return callback(null, path.resolve(__dirname, "../images"));

        } catch (err: any) {

            console.log(err, 'error');

        }
    },

    filename: (req, file, callback) => {

        try {

            console.log(file, 'file2');

            return callback(null, Date.now() + "_" + file.originalname);

        } catch (err: any) {

            console.log(err, 'err');

        }

    }

});



const upload = multer({ storage: storage });


export { upload }


