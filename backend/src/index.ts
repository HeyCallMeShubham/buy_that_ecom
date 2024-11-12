import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import cors from "cors";
import bodyParser from "body-parser";

import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware";

import { Errorhandler } from "./utils/ErrorHandler";
import https from "https";

import fs from "fs";
import path from "path";

import mongoose from "mongoose";
import { dbConnect } from "./config/dbConnect";

import { app } from "./app";
import { v2 as cloudinary } from "cloudinary";

import { uploadOnCloudinary } from "./services/cloudinary";
import multer from "multer";

import { upload } from "./middlewares/multer.fileUpload.middleware";
import { UserRouter } from "./routes/UserRoutes";



(async () => {

    dotenv.config({ path: path.resolve(__dirname, "../.env") });

})();


///const upload = multer({ dest: path.resolve(__dirname, "./images") });


(async () => {

    dbConnect();

})();





app.use(cors({

    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}));





app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use("/api/v1/user", UserRouter);
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));





const images = path.resolve(__dirname, `./images`);

const files = fs.readdirSync(images);

console.log(images, 'images');





const filePathToRemoveFrom = path.join(__dirname + "./images")




app.post("/upload", upload.single("profileImage"), (req: any, res: Response, next: NextFunction) => {

    try {

        console.log(req.file, 'req.file')

        uploadOnCloudinary(req.file.path, req.file.filename);



        // if (true) {

        setTimeout(() => {

            fs.unlinkSync(`${filePathToRemoveFrom}/${req.file.filename}`);

        }, 2000)


        //   throw new Errorhandler(409, "not  found");

        ///}

    } catch (err: any) {

        console.log(err, "error");


        throw new Errorhandler(err.statusCode, err.message);

    }

});








app.use(errorMiddleware);


interface IHttpsOptions {

    key: Buffer,
    cert: Buffer

}



const httpsOptions: IHttpsOptions = {

    key: fs.readFileSync(path.join(__dirname, "../certs/cert.key")),
    cert: fs.readFileSync(path.join(__dirname, "../certs/cert.crt")),

}





const httpsServer = https.createServer(httpsOptions, app);


httpsServer.listen(process.env.PORT || 4431, () => {

    console.log(`listening on port number ${process.env.PORT}`);

});





