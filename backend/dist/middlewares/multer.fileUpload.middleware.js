"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        try {
            console.log(file, 'file');
            return callback(null, path_1.default.resolve(__dirname, "../images"));
        }
        catch (err) {
            console.log(err, 'error');
        }
    },
    filename: (req, file, callback) => {
        try {
            console.log(file, 'file2');
            return callback(null, Date.now() + "_" + file.originalname);
        }
        catch (err) {
            console.log(err, 'err');
        }
    }
});
const upload = (0, multer_1.default)({ storage: storage });
exports.upload = upload;
