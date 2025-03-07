"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        try {
            console.log(req, 'req.file1');
            return callback(null, path_1.default.resolve(__dirname, "../images"));
        }
        catch (err) {
            console.log(err, 'error');
        }
    },
    filename: (req, file, callback) => {
        try {
            console.log(req, 'req.file2');
            return callback(null, Date.now() + "_" + file.originalname);
        }
        catch (err) {
            console.log(err, 'err');
        }
    }
});
const upload = (0, multer_1.default)({
    storage: storage,
    limits: { fieldSize: 10 * 1024 * 1024 }
});
exports.upload = upload;
