"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware_1 = require("./middlewares/error.middleware");
const notification_router_1 = require("./router/notification.router");
const express_app_1 = require("./utils/express.app");
const app = (0, express_app_1.expressApp)();
app === null || app === void 0 ? void 0 : app.use("/api/v1/notifications/", notification_router_1.notifications_router);
app === null || app === void 0 ? void 0 : app.use(error_middleware_1.errorMiddleware);
app === null || app === void 0 ? void 0 : app.listen(3200, () => {
    console.log("hello 3200");
});
