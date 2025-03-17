import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { database } from "./config/database";
import { ProductRouter } from "./routers/product.routes";
import { ErrorMiddleware } from "./middlewares/Error.middleware";



const expressApp = (): Express => {

    const app: Express = express();

    (() => {

        database();

    })()



    app.use(cors({

        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true

    }));



    app.use(express.json());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cookieParser());
    app.use("/", ProductRouter)
    app.use(express.urlencoded({ extended: true }));
    app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));



    app.use(ErrorMiddleware);


    return app

}


export { expressApp }

