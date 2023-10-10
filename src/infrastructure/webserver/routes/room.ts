import express from "express";
import authMiddleware from "../../middleware/token";
import roomRepository from "../../../domain/repository/room";
import roomDbRepository from "../../db/room/room";
import roomController from "../../../controller/room/roomController";
const router = express.Router();

const controller = roomController(roomRepository, roomDbRepository);

router.post("/", controller.addNewRoom);

router.get("/", authMiddleware);

router.put("/", authMiddleware);

router.delete("/", authMiddleware);

export default router;
