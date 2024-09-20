import { Router } from "express";
import { getPrimaryDetails } from "../controller/Tenthclass.controller.js"; // Ensure the path is correct

const router = Router();

// Define the route for getting primary details
router.get("/getPrimaryDetails", getPrimaryDetails); // Use "/" instead of "./"

// Export the router
export default router;
