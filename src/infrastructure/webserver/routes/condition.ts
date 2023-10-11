import express from "express";
import authMiddleware from "../../middleware/token";
import conditionRepository from "../../../domain/repository/condition";
import conditionDbRepository from "../../db/condition/condition";
import conditionController from "../../../controller/condition/conditionController";
const router = express.Router();

const controller = conditionController(conditionRepository, conditionDbRepository);

router.post("/", controller.addNewConditionController);

router.get("/", controller.getConditionsController);

router.get("/:id", controller.getConditionDetailController);

router.put("/:id", controller.updateConditionController);

router.delete("/:id", controller.deleteController);

export default router;
