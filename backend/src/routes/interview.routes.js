import express from "express";
import isAuth from "../middlewares/auth.middleware";
import { upload } from "../middlewares/multer.middleware";
import { analyzeResume } from "../controllers/interview.controller";

const interviewRouter = express.Router()

interviewRouter.post("/resume", isAuth,upload.single("resume"),
analyzeResume)


export default interviewRouter