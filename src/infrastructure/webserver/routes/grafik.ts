import express from "express";
import authMiddleware from "../../middleware/token";
import valueSensorRepository from "../../../domain/repository/sensorValue";
import valueSensorDbRepository from "../../mongoDb/db/sensor";
import grafikController from "../../../controller/grafik/grafikController"
const router = express.Router();

const controller = grafikController(valueSensorRepository, valueSensorDbRepository);

router.get("/", authMiddleware, controller.getGrafikSensor);


export default router;
