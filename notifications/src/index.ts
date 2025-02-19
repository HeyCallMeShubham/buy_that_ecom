
import { notifications_router } from "./router/notification.router";
import { expressApp } from "./utils/express.app";


const app = expressApp();


app?.use("/api/v1/notifications/", notifications_router);












