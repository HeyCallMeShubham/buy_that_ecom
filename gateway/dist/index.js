"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_express_1 = require("./app.express");
const app = (0, app_express_1.expressApp)();
app.listen(3000, () => {
    console.log("gateway server listening on port 3000");
});
