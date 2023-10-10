export default function RoomRepository(repository: any) {
  const findByProperty = (params: any) => repository.findByProperty(params);
  const addRelation = (id: number, idRelation: number) => repository.addRelation(id, idRelation)
  const countAll = (params: any) => repository.countAll(params);
  const findById = (id: any) => repository.findById(id);
  const add = (Room: any) => repository.add(Room);
  const deleteById = (id: number) => repository.deleteById(id);
  const updateById = (id: number, name: string) => repository.updateById(id, name);
  const findByPropertyRelation = (params: any) => repository.findByPropertyRelation(params);
  return {
    findByProperty,
    countAll,
    findById,
    add,
    addRelation,
    deleteById,
    updateById,
    findByPropertyRelation
  };
}
