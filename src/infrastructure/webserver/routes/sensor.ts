import express from "express";
// import from "../../middleware/token";
import sensorRepository from "../../../domain/repository/sensor";
import sensorDbRepository from "../../db/sensor/sensor";
import sensorController from "../../../controller/sensor/sensorController";
const router = express.Router();

const controller = sensorController(sensorRepository, sensorDbRepository);

router.post("/",  controller.addNewSensor);

router.get("/",  controller.getSensorByRoomId);

router.get("/:id",  controller.getSensorByIdSensor);

router.put("/:id",  controller.updateSensorByIdSensor);

router.delete("/:id",  controller.deleteController);

export default router;
