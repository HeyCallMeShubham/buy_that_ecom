"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./config/database");
const product_routes_1 = require("./routers/product.routes");
const expressApp = () => {
    const app = (0, express_1.default)();
    (() => {
        (0, database_1.database)();
    })();
    app.use((0, cors_1.default)({
        origin: ["http://localhost:5173", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    app.use(express_1.default.json());
    app.use(body_parser_1.default.json({ limit: "50mb" }));
    app.use((0, cookie_parser_1.default)());
    app.use("/", product_routes_1.ProductRouter);
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
    return app;
};
exports.expressApp = expressApp;
