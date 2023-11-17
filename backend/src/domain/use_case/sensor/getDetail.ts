const getSensorDetail = (sensorId: number, repository: any) => {
  return repository.findById(sensorId).then((sensor: any) => {
    if (sensor != null) {
      return sensor
    }
    throw new Error("sensor not found")
  })
};

export default getSensorDetail;
