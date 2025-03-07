"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const config_1 = require("./db/config");
const User_routes_1 = require("./routers/User.routes");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const expressApp = () => {
    (() => {
        (0, config_1.configDatabase)();
    })();
    app.use((0, cors_1.default)({
        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    app.use(express_1.default.json());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((0, cookie_parser_1.default)());
    app.use("/", User_routes_1.userRouter);
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
    return app;
};
exports.expressApp = expressApp;
