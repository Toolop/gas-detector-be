import express from "express";
// import authMiddleware from "../../middleware/token";
import roomRepository from "../../../domain/repository/room";
import roomDbRepository from "../../db/room/room";
import roomController from "../../../controller/room/roomController";
const router = express.Router();

const controller = roomController(roomRepository, roomDbRepository);

router.post("/", controller.addNewRoom);

router.get("/", controller.getRooms);

router.put("/:id", controller.updateRoomControl);

router.delete("/:id", controller.deleteRoomControl);

export default router;
