
import { RegisterUser } from "./controllers/Register.user";
import { expressApp } from "./express.app";
import { errorMiddleware } from "./middlewares/error.middleware";
import { userModel } from "./models/User.Model";

const app = expressApp();

app.use(errorMiddleware);





app.listen(4500, () => {

    console.log("listening on 4500");

});


