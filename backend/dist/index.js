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
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const ErrorHandler_1 = require("./utils/ErrorHandler");
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbConnect_1 = require("./config/dbConnect");
const app_1 = require("./app");
const cloudinary_1 = require("./services/cloudinary");
const multer_fileUpload_middleware_1 = require("./middlewares/multer.fileUpload.middleware");
const UserRoutes_1 = require("./routes/UserRoutes");
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env") });
}))();
///const upload = multer({ dest: path.resolve(__dirname, "./images") });
(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, dbConnect_1.dbConnect)();
}))();
app_1.app.use((0, cors_1.default)({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app_1.app.use(express_1.default.json());
app_1.app.use(express_1.default.urlencoded({ extended: true }));
app_1.app.use(body_parser_1.default.json({ limit: "50mb" }));
app_1.app.use((0, cookie_parser_1.default)());
app_1.app.use("/api/v1/user", UserRoutes_1.UserRouter);
app_1.app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app_1.app.use(express_1.default.static("public"));
const images = path_1.default.resolve(__dirname, `./images`);
const files = fs_1.default.readdirSync(images);
console.log(images, 'images');
const filePathToRemoveFrom = path_1.default.join(__dirname + "./images");
app_1.app.post("/upload", multer_fileUpload_middleware_1.upload.single("profileImage"), (req, res, next) => {
    try {
        console.log(req.file, 'req.file');
        (0, cloudinary_1.uploadOnCloudinary)(req.file.path, req.file.filename);
        // if (true) {
        setTimeout(() => {
            fs_1.default.unlinkSync(`${filePathToRemoveFrom}/${req.file.filename}`);
        }, 2000);
        //   throw new Errorhandler(409, "not  found");
        ///}
    }
    catch (err) {
        console.log(err, "error");
        throw new ErrorHandler_1.Errorhandler(err.statusCode, err.message);
    }
});
app_1.app.use(errorMiddleware_1.errorMiddleware);
const httpsOptions = {
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, "../certs/cert.key")),
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, "../certs/cert.crt")),
};
const httpsServer = https_1.default.createServer(httpsOptions, app_1.app);
httpsServer.listen(process.env.PORT || 4431, () => {
    console.log(`listening on port number ${process.env.PORT}`);
});
