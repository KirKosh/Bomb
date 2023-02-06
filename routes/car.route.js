const { Router } = require("express");
const { getCar, postCar, updateCar, deleteCar } = require("../controlles/car.controller");
const router = Router();

router.route("/").get(getCar).post(postCar);
router.route("/:id").get(getCarOne).put(updateCar).delete(deleteCar);

module.exports = router;
