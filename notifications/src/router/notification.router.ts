
import express, { Router } from "express";
import { ForwardNotifications } from "../controllers/notifications/ForwardNotifications";


const notifications_router: Router = Router();



notifications_router.post("/send/notification", ForwardNotifications);





export { notifications_router }









