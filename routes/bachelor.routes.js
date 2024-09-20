import { Router } from "express";
import { getBachelorDetails } from "../controller/Bachlor.controller.js"; // Ensure the path is correct

const router = Router();

// Define the route for getting primary details
router.get("/getBachelorDetails", getBachelorDetails); // Use "/" instead of "./"

// Export the router
export default router;
