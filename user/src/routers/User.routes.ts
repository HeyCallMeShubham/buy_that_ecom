
import express, { Router } from 'express';
import { RegisterUser } from '../controllers/Register.user';
import { upload } from '../middlewares/Multer.upload';


const userRouter: Router = Router();


userRouter.post("/register", upload.single("profileImage"), RegisterUser);


export { userRouter }

