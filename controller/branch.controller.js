import { branches } from "../models/branch.models.js"; // Ensure the path and filename are correct

export const getBranchDetails = (req, res) => {
  const { branchno } = req.query; 

  let filteredBranches = branches;

  if (branchno) {
    filteredBranches = branches.filter(
      (branch) => branch.branchno === branchno
    );
  }

  res.json({ branches: filteredBranches });
};
