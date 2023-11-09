import getConditionsUseCase from "../../domain/use_case/condition/getConditions";
import addConditionUseCase from "../../domain/use_case/condition/add";
import getConditionDetailUseCase from "../../domain/use_case/condition/getDetail";
import updateConditionUseCase from "../../domain/use_case/condition/update";
import deleteConditionUseCase from "../../domain/use_case/condition/delete";

export default function conditionController(
  DbRepository: any,
  DbRepositoryImpl: any
) {
  const dbRepository = DbRepository(DbRepositoryImpl());

  const addNewConditionController = (req: any, res: any, next: any) => {
    try {
      const { upperDanger, upperWarning, lowerDanger, lowerWarning, sensorId } =
        req.body;
      addConditionUseCase(
        parseInt(upperDanger),
        parseInt(upperWarning),
        parseInt(lowerDanger),
        parseInt(lowerWarning),
        parseInt(sensorId),
        dbRepository
      )
        .then((condition: any) => {
          res.status(201);
          res.json(condition);
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };
  const getConditionsController = (req: any, res: any, next: any) => {
    try {
      const sensorId: number = parseInt(req.query.sensorId);
      getConditionsUseCase(sensorId, dbRepository)
        .then((condition: any) => {
          res.status(200);
          res.json(condition);
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };
  const getConditionDetailController = (req: any, res: any, next: any) => {
    try {
      const conditionId = parseInt(req.params["id"]);
      getConditionDetailUseCase(conditionId, dbRepository)
        .then((condition: any) => {
          res.status(200);
          res.json(condition);
        })
        .catch((err: any) => {
          res.status(404);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  const updateConditionController = (req: any, res: any, next: any) => {
    try {
      const conditionId = parseInt(req.params["id"]);
      const { upperDanger, upperWarning, lowerDanger, lowerWarning } = req.body;
      updateConditionUseCase(
        parseInt(upperDanger),
        parseInt(upperWarning),
        parseInt(lowerDanger),
        parseInt(lowerWarning),
        conditionId,
        dbRepository
      )
        .then(() => {
          res.status(201);
          res.send("update successfully");
        })
        .catch((err: any) => {
          res.status(404);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  const deleteController = (req: any, res: any, next: any) => {
    try {
      const conditionId = parseInt(req.params["id"]);
      deleteConditionUseCase(conditionId, dbRepository)
        .then(() => {
          res.status(200);
          res.send("delete successfully");
        })
        .catch((err: any) => {
          res.status(404);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  return {
    addNewConditionController,
    getConditionsController,
    getConditionDetailController,
    updateConditionController,
    deleteController,
  };
}
