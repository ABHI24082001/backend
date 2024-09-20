import { Primary } from "../models/Tenthclass.modals.js";

export const getPrimaryDetails = (req, res) => {
  res.status(200).json(Primary);
};