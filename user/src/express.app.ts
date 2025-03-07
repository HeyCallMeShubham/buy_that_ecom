
import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { configDatabase } from "./db/config";
import { userRouter } from "./routers/User.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();



const app: Express = express();


const expressApp = (): Express => {

    (() => {

        configDatabase();

    })();


    app.use(cors({

        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true

    }));




    app.use(express.json());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cookieParser());
    app.use("/", userRouter);
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



    return app

}





export { expressApp }


