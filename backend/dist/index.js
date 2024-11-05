"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConnect_1 = require("./config/dbConnect");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const ErrorHandler_1 = require("./utils/ErrorHandler");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
}))();
const app = (0, express_1.default)();
(0, dbConnect_1.dbConnect)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:5153"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app.get("/get", (req, res, next) => {
    console.log("hell0");
    if (true) {
        return next(new ErrorHandler_1.Errorhandler(401, "not found"));
    }
});
app.use(errorMiddleware_1.errorMiddleware);
const options = {
    key: fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../certs/cert.key")),
    cert: fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../certs/cert.crt"))
};
const sslServer = https_1.default.createServer(options, app);
sslServer.listen(process.env.HOST, () => {
    console.log(process.env.HOST);
});
