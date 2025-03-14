import mongoose from "mongoose";
import { AsyncHandler } from "../utils/AsyncHandler";

const database = async () => {

    try {

        const { connection } = await mongoose.connect("mongodb+srv://shubhamkumarin2022:jlepX5mYYeJXpAPi@buythatecomproducts.wajnk.mongodb.net/");

        //  jlepX5mYYeJXpAPi

        if (connection) {

            console.log('connected to database');

            return connection

        }

    } catch (err: any) {

        console.log(err);

    }



}





export { database }




