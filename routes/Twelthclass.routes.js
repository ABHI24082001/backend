import { Router } from "express";
import { getSecondaryDetails } from "../controller/Twelthclass.controller.js"; // Ensure the path is correct

const router = Router();

// Define the route for getting primary details
router.get("/getSecondaryDetails", getSecondaryDetails); // Use "/" instead of "./"

// Export the router
export default router;
