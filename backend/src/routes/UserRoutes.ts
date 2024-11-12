
import express, { Router } from "express"
import { userModel } from "../models/userModel.ts/UserModel";
import { RegisterUser } from "../controllers/user/Register";



const UserRouter: Router = Router();

UserRouter.post("/register", RegisterUser);


export { UserRouter }


