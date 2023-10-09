import addSensor from "../../domain/use_case/sensor/add";

export default function roomController(
  roomDbRepository: any,
  roomDbRepositoryImpl: any
) {
  const dbRepository = roomDbRepository(roomDbRepositoryImpl());

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

  return {
    addNewSensor,
  };
}
