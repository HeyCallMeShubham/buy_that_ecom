
import { expressApp } from "./app.express";


const app = expressApp();





app.listen(3000, () => {

    console.log("gateway server listening on port 3000");

});


