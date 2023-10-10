const getSensorDetail = (sensorId: number, repository: any) => {
  if (sensorId) {
    return repository.findById(sensorId);
  }
  throw new Error("need Sensor Id");
};

export default getSensorDetail;
