
import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";



const app: Express = express();


const expressApp = (): Express => {

    app.use(cors({

        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true

    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
    app.use(express.static("public"));



    return app

}






export { expressApp }

