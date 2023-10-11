const getConditionsUseCase = (sensorId: number, repository: any) => {
    if (sensorId) {
        return repository.findByPropertyRepo({ sensorId: sensorId });
    } else {
        return repository.findAllRepo();
    }
};

export default getConditionsUseCase;
