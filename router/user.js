import express from "express";
import { createUser } from "../controllers/createuser.controller.js";
import { getUser } from "../controllers/getuser.controller.js";
import { getEventById } from "../controllers/geteventbyid.controller.js";
const router = express.Router();
router.post("/register", createUser);
router.get("/getuser", getUser);
router.get("/getuserbyid", getEventById);
export default router;
