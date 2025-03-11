
import express, { Router } from 'express';
import { RegisterUser } from '../controllers/Register.user';
import { upload } from '../middlewares/Multer.upload';
import { Login } from '../controllers/Login.user';


const userRouter: Router = Router();


userRouter.post("/register", upload.single("profileImage"), RegisterUser);

userRouter.post("/login", Login);


export { userRouter }

