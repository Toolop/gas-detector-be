const getGrafikUseCase = (
    sensorId: number, getDateQuery: string, repository: any
) => {
    if (getDateQuery === "Day") return repository.getGrafikDayRepo(sensorId)
    else if (getDateQuery === "Week") return repository.getGrafikWeekRepo(sensorId)
    else if (getDateQuery === "Month") return repository.getGrafikMonthRepo(sensorId)
    else if (getDateQuery === "Year") return repository.getGrafikYearRepo(sensorId)
};

export default getGrafikUseCase;
