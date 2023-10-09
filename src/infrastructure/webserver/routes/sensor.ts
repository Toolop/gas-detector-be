import express from "express";
import authMiddleware from "../../middleware/token";
import sensorRepository from "../../../domain/repository/sensor";
import sensorDbRepository from "../../db/sensor/sensor";
import sensorController from "../../../controller/sensor/sensorController";
const router = express.Router();

const controller = sensorController(sensorRepository, sensorDbRepository);

router.post("/", authMiddleware, controller.addNewSensor);

router.get("/", authMiddleware);

router.put("/", authMiddleware);

router.delete("/", authMiddleware);

export default router;
