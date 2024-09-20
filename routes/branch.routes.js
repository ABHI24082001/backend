// routes/branchRoutes.js
import { Router } from "express";
import { getBranchDetails } from "../controller/branch.controller.js"; // Ensure the path and filename are correct

const router = Router();

router.get("/getbranchdetails", getBranchDetails);

export default router;
