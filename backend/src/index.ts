import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./config/dbConnect";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { Errorhandler } from "./utils/ErrorHandler";
import https from "https"
import fs from "fs"
import path from "path";





(async () => {

    dotenv.config();

})();



const app = express();



dbConnect();



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





const options = {

    key: fs.readFileSync(path.resolve(__dirname, "../certs/cert.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "../certs/cert.crt"))

}




const sslServer = https.createServer(options, app);



sslServer.listen(process.env.HOST, () => {

    console.log(process.env.HOST);

});


