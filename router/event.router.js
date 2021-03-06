import express from "express";
const router = express.Router();
import { createEvent } from "../controllers/createevent.controller.js";
import { getEvent } from "../controllers/getevent.controller.js";
import { getEventById } from "../controllers/geteventbyid.controller.js";
import { getRating } from "../controllers/geteventrating.controller.js";
import { putRating } from "../controllers/puteventrating.controller.js";
import { register } from "../controllers/register.controller.js";
import { modifyEvent } from "../controllers/modifyevent.controller.js";
import { endEvent } from "../controllers/endevent.controller.js";
import { putfeedback } from "../controllers/putfeedback.controller.js";
import { getPaticitpationList } from "../controllers/getparticipationlist.controller.js";
import { getMyEvents } from "../controllers/getmyevents.controller.js";
router.post("/createevent", createEvent);
router.get("/getevent", getEvent);
router.get("/geteventbyid", getEventById);
router.post("/register", register);
router.get("/getrating", getRating);
router.post("/putrating", putRating);
router.post("/modifyevent", modifyEvent);
router.post("/endevent", endEvent);
router.post("/putfeedback", putfeedback);
router.get("/getparticipation", getPaticitpationList);
router.get("/getmyevents", getMyEvents);
export default router;
