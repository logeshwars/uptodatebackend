import express from "express";
import sendMail from "../controllers/sendmail.controller.js";
const router = express.Router();
router.post("/send", sendMail);
export default router;
