import cities from "../models/City.js";

const getRandomLocation = () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex].name;
};

export default getRandomLocation;