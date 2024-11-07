import express from "express";
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

import { app } from "./app"



(async () => {

    dotenv.config();

})();





(async () => {


    dbConnect();

})()





app.use(cors({

    origin: ["http://localhost:5153"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));





app.get("/get", (req, res, next) => {

    console.log("hell0")

    if (true) {

        return next(new Errorhandler(401, "not found"))

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





