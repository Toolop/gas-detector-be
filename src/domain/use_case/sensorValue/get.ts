const getSensorValueUseCase = (
    sensorId: number, repository: any
) => {
    return repository.getById(sensorId)
};

export default getSensorValueUseCase;
