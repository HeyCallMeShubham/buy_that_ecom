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
exports.configDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const configDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const MONGODBURL = process.env.MONGODB_URL;
        // make sure to use an previous version of mongoose to avoid
        // any kind of error latest version can cause error 
        const { connection } = yield mongoose_1.default.connect(`${MONGODBURL}`);
        if (connection) {
            console.log("connected with mongodb");
            return connection;
        }
        else {
            console.log("couldnt connect");
        }
    }
    catch (err) {
        console.log("db-connection-error", err);
        console.log("db-err-code", err.statusCode);
        process.exit(1);
    }
});
exports.configDatabase = configDatabase;
