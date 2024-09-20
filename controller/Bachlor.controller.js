import { Bachelor } from "../models/Bechlor.modal.js";

export const getBachelorDetails = (req, res) => {
  res.status(200).json(Bachelor);
};
