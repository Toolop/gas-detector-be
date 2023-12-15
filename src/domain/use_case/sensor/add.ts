import sensor from "../../../entities/sensor";

const addSensor = (
  name: string,
  calibration: string,
  sensorTypeId: number,
  roomId: number,
  unitMeasurement: string,
  repository: any
) => {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!name) {
    throw new Error("Sensor name cannot be empty");
  }

  const newSensor = sensor(
    name,
    calibration,
    sensorTypeId,
    roomId,
    unitMeasurement
  );

  return repository
    .checkRoomRepo(roomId)
    .then((room: any) => {
      if (!room.length) {
        throw new Error(`room Id not Found`);
      }
      return repository.checkSensorTypeRepo(sensorTypeId);
    })
    .then((typeSensor: any) => {
      if (typeSensor === null) {
        throw new Error(`sensor type id not Found`);
      }
      return repository.add(newSensor);
    });
};

export default addSensor;
