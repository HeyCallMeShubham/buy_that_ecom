
import mongoose from "mongoose";




export const configDatabase = async () => {

    try {

        const MONGODBURL: any = process.env.MONGODB_URL

        // make sure to use an previous version of mongoose to avoid
        // any kind of error latest version can cause error 

        const { connection } = await mongoose.connect(`${MONGODBURL}`);


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


