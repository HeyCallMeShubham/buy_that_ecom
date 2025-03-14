
import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressProxy from "express-http-proxy";
import cors from "cors";



const expressApp = (): Express => {

    const app: Express = express();

    app.use(cors({

        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true

    }));

 
    app.use("/api/v1/user", expressProxy("http://localhost:4500"));
    app.use("/api/v1/product", expressProxy("http://localhost:2550"));
    // the express.json({limit:50mb}) and 
    // express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000});
    // must be used     
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 500000}));




    app.use((error: any, req: any, res: any, next: any) => {

        console.log(error, 'errr');

    });



    return app

}





export { expressApp }




