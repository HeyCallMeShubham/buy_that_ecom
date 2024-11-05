import mongoose from "mongoose";
import { Errorhandler } from "../utils/ErrorHandler";



export const dbConnect = async () => {

    try {

        const MONGODBURL: any = process.env.MONGODBURL

        console.log(MONGODBURL, 'mongodb');

        const { connection } = await mongoose.connect(MONGODBURL);

        
        if (connection) {

            console.log("connected with mongodb");

            return connection

        } else {

            console.log("couldnt connect");

        }

    } catch (err: any) {

        console.log("db-connection-error", err);
        console.log("db-err-code", err.statusCode);

        process.exit(1);

    }


}



