
import express, { Router } from "express";
import { userModel } from "../models/userModel.ts/UserModel";
import { RegisterUser } from "../controllers/user/Register";
import { upload } from "../middlewares/multer.fileUpload.middleware";
import { LoginUser } from "../controllers/user/Login";



const UserRouter: Router = Router();


UserRouter.post("/register", upload.single("profileImage"), RegisterUser);

UserRouter.post("/login", LoginUser);



export { UserRouter }



