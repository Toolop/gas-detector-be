const sensor = (
  name: string,
  calibration: string,
  sensorTypeId: number,
  roomId: number,
  unitMeasurement: string
) => {
  return {
    name,
    calibration,
    sensorTypeId,
    roomId,
    unitMeasurement,
  };
};

export default sensor;
