const getSensorValueUseCase = (
    sensorId: number, repository: any
) => {
    return repository.getLastByIdRepo(sensorId)
};

export default getSensorValueUseCase;
