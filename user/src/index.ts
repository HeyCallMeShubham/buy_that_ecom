import { expressApp } from "./express.app";


const app = expressApp();





console.log(app, 'app')
console.log(app, 'app')



app.listen(4500, () => {

    console.log("listening on 4500");

})



