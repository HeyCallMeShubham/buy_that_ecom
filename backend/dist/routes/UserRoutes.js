"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const Register_1 = require("../controllers/user/Register");
const UserRouter = (0, express_1.Router)();
exports.UserRouter = UserRouter;
UserRouter.post("/register", Register_1.RegisterUser);
