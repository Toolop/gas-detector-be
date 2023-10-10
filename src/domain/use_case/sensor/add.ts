import sensor from "../../../entities/sensor";

const addSensor = (
  name: string,
  calibration: string,
  sensorTypeId: number,
  roomId: number,
  repository: any
) => {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!name) {
    throw new Error("Sensor name cannot be empty");
  }

  const newSensor = sensor(name, calibration, sensorTypeId, roomId);

  return repository.add(newSensor);
};

export default addSensor;
