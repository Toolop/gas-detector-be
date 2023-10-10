const sensor = (
  name: string,
  calibration: string,
  sensorTypeId: number,
  roomId: number
) => {
  return {
    name,
    calibration,
    sensorTypeId,
    roomId,
  };
};

export default sensor;
