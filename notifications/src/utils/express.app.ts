import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();


export const expressApp = () => {

    try {

        app.use(cors({

            origin: ["http://localhost:5173"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true

        }));

        app.use(cookieParser());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
        app.use(express.json({ limit: "50mb" }));
        app.use(express.urlencoded({ extended: true, limit: "50mb" }));
        app.use(express.static("public"));


        return app

    } catch (err: any) {

        console.log(err);

    }


}










