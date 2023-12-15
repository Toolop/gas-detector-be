import sensor from "../../../entities/sensor";

const updateSensor = (
  name: string,
  calibration: string,
  sensorTypeId: number,
  roomId: number,
  sensorId: number,
  unitMeasurement: string,
  repository: any
) => {
  const updateSensor = sensor(
    name,
    calibration,
    sensorTypeId,
    roomId,
    unitMeasurement
  );

  return repository.findById(sensorId).then((Sensor: any) => {
    if (Sensor === null) {
      throw new Error(`sensor not found`);
    }
    if (name) {
      return repository.updateRepo(sensorId, updateSensor);
    }
    throw new Error("name must be not empty");
  });
};

export default updateSensor;
