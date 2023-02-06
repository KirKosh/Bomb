const { getCarDB } = require("../service/car.service");
const { getCarOneDB } = require("../service/car.service");


getCar = (req, res) => {
  const data = getCarDB();
  res.status(200).json(data);
};

getCarOne = (req, res) => {
    const id = req.params.id;
  const data = getCarOneDB(id);
  res.status(200).json(data);
};

postCar = (req, res) => {
  console.log(req);
  res.status(200).json("Создали новую машину");
};

updateCar = (req, res) => {
  res.status(200).json("Обновили машину");
};

deleteCar = (req, res) => {
  res.status(200).json("Удалили машину");
};

module.exports = {
  getCar,
  postCar,
  updateCar,
  deleteCar,
  getCarOne,
};
