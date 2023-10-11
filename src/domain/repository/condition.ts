export default function conditionRepository(repository: any) {
    const findByPropertyRepo = (params: any) => repository.findByProperty(params);
    const findByIdRepo = (id: number) => repository.findById(id);
    const getLastByIdRepo = (id: number) => repository.findLastById(id);
    const updateRepo = (id: number, entity: any) => repository.update(id, entity);
    const addRepo = (condition: any) => repository.add(condition);
    const deleteRepo = (id: number) => repository.deleteCondition(id);
    const checkSensorRepo = (id: number) => repository.checkSensor(id);
    const findAllByIdRepo = (id: number) => repository.findAllById(id);
    const findAllRepo = () => repository.findAll();
    return {
        findByPropertyRepo,
        checkSensorRepo,
        findByIdRepo,
        addRepo,
        updateRepo,
        getLastByIdRepo,
        deleteRepo,
        findAllByIdRepo,
        findAllRepo
    };
}
