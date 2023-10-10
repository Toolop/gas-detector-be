export default function sensorRepository(repository: any) {
  const findByProperty = (params: any) => repository.findByProperty(params);
  const addRelation = (id: number, idRelation: number) =>
    repository.addRelation(id, idRelation);
  const findAllByIdRoom = (id: number) => repository.findAllByIdRoom(id);
  const findById = (id: any) => repository.findById(id);
  const add = (sensor: any) => repository.add(sensor);
  const deleteById = (id: number) => repository.deleteById(id);
  const findAll = () => repository.findAll();

  return {
    findByProperty,
    findAllByIdRoom,
    findById,
    add,
    addRelation,
    deleteById,
    findAll,
  };
}
