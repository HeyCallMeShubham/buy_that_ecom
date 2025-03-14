"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_app_1 = require("./express.app");
const app = (0, express_app_1.expressApp)();
app.listen(2550, () => {
    console.log("listening on port 2550");
});
