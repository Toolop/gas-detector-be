import addSensor from "../../domain/use_case/sensor/add";
import getSensors from "../../domain/use_case/sensor/getById";
import getSensorDetail from "../../domain/use_case/sensor/getDetail";

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
          next();
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
          next();
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
      next();
    }
  };
  const getSensorByRoomId = (req: any, res: any, next: any) => {
    try {
      const roomId: number = parseInt(req.query.roomId);
      getSensors(roomId, dbRepository)
        .then((sensor: any) => {
          res.status(200);
          res.json(sensor);
          next();
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
          next();
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
      next();
    }
  };
  const getSensorByIdSensor = (req: any, res: any, next: any) => {
    try {
      const sensorId = parseInt(req.params["id"]);
      getSensorDetail(sensorId, dbRepository)
        .then((sensor: any) => {
          res.status(200);
          res.json(sensor);
          next();
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
          next();
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
      next();
    }
  };

  return {
    addNewSensor,
    getSensorByRoomId,
    getSensorByIdSensor,
  };
}
