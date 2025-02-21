"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifications_router = void 0;
const express_1 = require("express");
const ForwardNotifications_1 = require("../controllers/notifications/ForwardNotifications");
const notifications_router = (0, express_1.Router)();
exports.notifications_router = notifications_router;
notifications_router.post("/send/notification", ForwardNotifications_1.ForwardNotifications);
