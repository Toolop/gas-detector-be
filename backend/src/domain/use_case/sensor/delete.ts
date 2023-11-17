const deleteSensorUseCase = (sensorId: number, repository: any) => {

    return repository.findById(sensorId)
        .then((Sensor: any) => {
            if (Sensor === null) {
                throw new Error(`sensor not found`);
            }
            return repository.deleteRepo(sensorId);
        });
}

export default deleteSensorUseCase;
