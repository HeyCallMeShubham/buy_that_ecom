"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_app_1 = require("./express.app");
const error_middleware_1 = require("./middlewares/error.middleware");
const app = (0, express_app_1.expressApp)();
app.use(error_middleware_1.errorMiddleware);
app.listen(4500, () => {
    console.log("listening on 4500");
});
