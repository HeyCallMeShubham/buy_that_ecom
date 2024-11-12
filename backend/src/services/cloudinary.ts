
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

import path from "path"
import { Errorhandler } from "../utils/ErrorHandler";




(async () => {

    dotenv.config();

})();





cloudinary.config({

    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true

});


const filePathToRemoveFrom = path.resolve(__dirname, `../images`)


const uploadOnCloudinary = async (filePath: any, filename:string | undefined) => {

    const options = {

        use_filename: true,
        unique_filename: false,
        overwrites: true

    }

    try {
    
        const result = await cloudinary.uploader.upload(filePath, options);

        return result;

    } catch (err: any) {
    
        fs.unlinkSync(`${filePathToRemoveFrom}/${filename}`);

    }


}



export { uploadOnCloudinary }




