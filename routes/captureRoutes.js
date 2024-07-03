import { Router } from "express";
import { checkCapture } from "../controller/captureController.js"; 

const router = Router();

router.post("/check-capture", checkCapture);

export default router;
