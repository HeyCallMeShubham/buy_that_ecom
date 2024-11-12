
import express, { Router } from "express";
import { userModel } from "../models/userModel.ts/UserModel";
import { RegisterUser } from "../controllers/user/Register";
import { upload } from "../middlewares/multer.fileUpload.middleware";



const UserRouter: Router = Router();


UserRouter.post("/register", upload.single("profileImage"), RegisterUser);



export { UserRouter }



