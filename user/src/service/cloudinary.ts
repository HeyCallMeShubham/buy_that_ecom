
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";

(async () => {

    dotenv.config();

})()




cloudinary.config({

    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY

});


const filePathToRemoveFrom = path.resolve(__dirname, `../images`)


const uploadOnCloudinary = async (filePath: any | string, filename: any | string) => {

    try {

        const uploadResult = await cloudinary.uploader.upload(filePath, {

            use_filename: true,
            unique_filename: false,
            overwrites: true

        });

        console.log(uploadResult, "uploadoncli");

        return uploadResult

    } catch (err: any) {

        console.log(err);

        fs.unlinkSync(`${filePathToRemoveFrom}/${filename}`);

    }


}








export { uploadOnCloudinary }


