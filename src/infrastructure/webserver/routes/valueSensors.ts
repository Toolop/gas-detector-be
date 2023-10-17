import express from "express";
import valueSensorRepository from "../../../domain/repository/sensorValue";
import valueSensorDbRepository from "../../mongoDb/db/sensor";
import sensorValueController from "../../../controller/sensorValue/sensorValueController";
import authMiddleware from "../../middleware/token";

const router = express.Router();

const controller = sensorValueController(valueSensorRepository, valueSensorDbRepository);

router.get("/", authMiddleware, controller.getValueSensor);


export default router;
