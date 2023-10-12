const getSensorValueUseCase = (
    sensorId: number, repository: any
) => {
    if (!sensorId) {
        throw new Error("sensorId needed in query")
    }
    return repository.findById(sensorId)
};

export default getSensorValueUseCase;
