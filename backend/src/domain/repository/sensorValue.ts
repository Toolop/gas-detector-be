export default function sensorValueRepository(repository: any) {
    const findById = (id: any) => repository.findLastById(id);
    const add = (user: any) => repository.add(user);
    const getGrafikDayRepo = (id: any) => repository.getGrafikByidDay(id);
    const getGrafikWeekRepo = (id: any) => repository.getGrafikByidWeek(id);
    const getGrafikMonthRepo = (id: any) => repository.getGrafikByidMonth(id);
    const getGrafikYearRepo = (id: any) => repository.getGrafikByidYear(id);

    return {
        findById,
        add,
        getGrafikDayRepo,
        getGrafikWeekRepo,
        getGrafikMonthRepo,
        getGrafikYearRepo
    };
}
