"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const expressApp = () => {
    try {
        app.use((0, cors_1.default)({
            origin: ["http://localhost:5173"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }));
        app.use((0, cookie_parser_1.default)());
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }));
        app.use(express_1.default.json({ limit: "50mb" }));
        app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
        app.use(express_1.default.static("public"));
        return app;
    }
    catch (err) {
        console.log(err);
    }
};
exports.expressApp = expressApp;
