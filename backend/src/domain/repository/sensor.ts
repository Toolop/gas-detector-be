export default function sensorRepository(repository: any) {
  const findByProperty = (params: any) => repository.findByProperty(params);
  const addRelation = (id: number, idRelation: number) =>
    repository.addRelation(id, idRelation);
  const checkRoomRepo = (id: number) => repository.checkRoom(id);
  const checkSensorTypeRepo = (id: number) => repository.checkSensorType(id);
  const findAllById = (id: number) => repository.findAllById(id);
  const findById = (id: any) => repository.findById(id);
  const add = (sensor: any) => repository.add(sensor);
  const deleteRepo = (id: number) => repository.deleteSensor(id);
  const findAll = () => repository.findAll();
  const updateRepo = (id: number, data: any) => { repository.update(id, data) }

  return {
    findByProperty,
    findAllById,
    findById,
    add,
    checkSensorTypeRepo,
    checkRoomRepo,
    addRelation,
    deleteRepo,
    findAll,
    updateRepo
  };
}
