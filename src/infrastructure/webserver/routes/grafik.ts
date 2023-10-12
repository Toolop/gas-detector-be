import express from "express";
import valueSensorRepository from "../../../domain/repository/sensorValue";
import valueSensorDbRepository from "../../mongoDb/db/sensor";
import grafikController from "../../../controller/grafik/grafikController"
const router = express.Router();

const controller = grafikController(valueSensorRepository, valueSensorDbRepository);

router.get("/", controller.getGrafikSensor);


export default router;
