import cities from "../models/City.js";
import vehicles from "../models/Vehicle.js";
import Cop from "../models/Cop.js";
import getRandomLocation from "../utils/getRandomLocation.js";

let fugitiveLocation = getRandomLocation();
console.log(`Fugitive is hiding in ${fugitiveLocation}`);

export const checkCapture = (req, res) => {
  const { cops } = req.body;

  const copObjects = cops.map(
    (cop) => new Cop(cop.name, cop.city, cop.vehicle)
  );

  let captureStatus = "Not Captured";
  let capturingCop = "";

  copObjects.forEach((cop) => {
    const city = cities.find((c) => c.name === cop.city);
    const vehicle = vehicles.find((v) => v.kind === cop.vehicle);

    if (city && vehicle) {
      // Ensure the vehicle has enough range for a round trip
      if (vehicle.range >= city.distance * 2) {
        if (cop.city === fugitiveLocation) {
          captureStatus = "Captured";
          capturingCop = cop.name;
        }
      }
    }
  });

  res.json({ captureStatus, capturingCop });
};