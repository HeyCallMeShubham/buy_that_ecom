
import multer from "multer";
import path from "path";



const storage = multer.diskStorage({

    destination: (req, file, callback) => {

        try {
            
            console.log(req, 'req.file1');

            return callback(null, path.resolve(__dirname, "../images"));

        } catch (err: any) {

            console.log(err, 'error');

        }
    },

    
    filename: (req, file, callback) => {

        try {
            
            console.log(req, 'req.file2');

            return callback(null, Date.now() + "_" + file.originalname);

        } catch (err: any) {

            console.log(err, 'err');

        }

    }

});



const upload = multer({

    storage: storage,
    limits: { fieldSize: 10 * 1024 * 1024 }

});



export { upload }


