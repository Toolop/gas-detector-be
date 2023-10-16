import express from "express";
import authMiddleware from "../../middleware/token";
import conditionRepository from "../../../domain/repository/condition";
import conditionDbRepository from "../../db/condition/condition";
import conditionController from "../../../controller/condition/conditionController";
const router = express.Router();

const controller = conditionController(conditionRepository, conditionDbRepository);

router.post("/", authMiddleware, controller.addNewConditionController);

router.get("/", authMiddleware, controller.getConditionsController);

router.get("/:id", authMiddleware, controller.getConditionDetailController);

router.put("/:id", authMiddleware, controller.updateConditionController);

router.delete("/:id", authMiddleware, controller.deleteController);

export default router;
