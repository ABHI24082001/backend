import { Secondary } from "../models/Twelthclass.modals.js";

export const getSecondaryDetails = (req, res) => {
  res.status(200).json(Secondary);
};
