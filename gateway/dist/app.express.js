"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const cors_1 = __importDefault(require("cors"));
const expressApp = () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    app.use("/api/v1/user", (0, express_http_proxy_1.default)("http://localhost:4500"));
    // the express.json({limit:50mb}) and 
    // express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000});
    // must be used     
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(express_1.default.urlencoded({ limit: '50mb', extended: true, parameterLimit: 500000 }));
    app.use((error, req, res, next) => {
        console.log(error, 'errr');
    });
    return app;
};
exports.expressApp = expressApp;
