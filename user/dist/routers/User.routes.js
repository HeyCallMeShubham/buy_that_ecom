"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const Register_user_1 = require("../controllers/Register.user");
const Multer_upload_1 = require("../middlewares/Multer.upload");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/register", Multer_upload_1.upload.single("profileImage"), Register_user_1.RegisterUser);
