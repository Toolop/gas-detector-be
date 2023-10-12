import addSensor from "../../domain/use_case/sensor/add";
import getSensors from "../../domain/use_case/sensor/getById";
import updateSensor from "../../domain/use_case/sensor/update";
import getSensorDetail from "../../domain/use_case/sensor/getDetail";
import deleteSensorUseCase from "../../domain/use_case/sensor/delete"

export default function sensorController(
  DbRepository: any,
  DbRepositoryImpl: any
) {
  const dbRepository = DbRepository(DbRepositoryImpl());

  const addNewSensor = (req: any, res: any, next: any) => {
    try {
      const { name, calibration, sensorTypeId, roomId } = req.body;
      addSensor(
        name,
        calibration,
        parseInt(sensorTypeId),
        parseInt(roomId),
        dbRepository
      )
        .then((room: any) => {
          res.status(201);
          res.json(room);
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
  const getSensorByRoomId = (req: any, res: any, next: any) => {
    try {
      const roomId: number = parseInt(req.query.roomId);
      getSensors(roomId, dbRepository)
        .then((sensor: any) => {
          res.status(200);
          res.json(sensor);
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
  const getSensorByIdSensor = (req: any, res: any, next: any) => {
    try {
      const sensorId = parseInt(req.params["id"]);
      getSensorDetail(sensorId, dbRepository)
        .then((sensor: any) => {
          res.status(200);
          res.json(sensor);
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

  const updateSensorByIdSensor = (req: any, res: any, next: any) => {
    try {
      const sensorId = parseInt(req.params["id"]);
      const { name, calibration, sensorTypeId, roomId } = req.body;
      updateSensor(name, calibration, parseInt(sensorTypeId), parseInt(roomId), sensorId, dbRepository)
        .then((sensor: any) => {
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
  }

  const deleteController = (req: any, res: any, next: any) => {
    try {
      const sensorId = parseInt(req.params["id"]);
      deleteSensorUseCase(sensorId, dbRepository)
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
  }

  return {
    addNewSensor,
    getSensorByRoomId,
    getSensorByIdSensor,
    updateSensorByIdSensor,
    deleteController
  };
}
