import express from "express";
import authMiddleware from "../../middleware/token";
import valueSensorRepository from "../../../domain/repository/room";
import valueSensorDbRepository from "../../db/room/room";
import sensorValueController from "../../../controller/sensorValue/sensorValueController";
const router = express.Router();

const controller = sensorValueController(valueSensorRepository, valueSensorDbRepository);

router.get("/", controller.getValueSensor);


export default router;
