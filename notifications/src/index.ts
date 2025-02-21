
import { notifications_router } from "./router/notification.router";

import { expressApp } from "./utils/express.app";

import { errorMiddleware } from "./middlewares/error.middleware";



const app = expressApp();

app?.use("/api/v1/notifications/", notifications_router);





app?.use(errorMiddleware);





app?.listen(3200, () => {

    console.log("hello 3200");

});


