const updateSensor = (sensorId: number, name: any, repository: any) => {

    return repository.findById(sensorId)
        .then((Sensor: any) => {
            if (Sensor === null) {
                throw new Error(`sensor not found`);
            }
            if (name) {
                return repository.updateRepo(sensorId, name);
            }
            throw new Error("name must be not empty");
        });
}

export default updateSensor;
