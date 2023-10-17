export default function userRepository(repository: any) {
  const findByProperty = (params: any) => repository.findByProperty(params);
  const countAll = (params: any) => repository.countAll(params);
  const findById = (id: any) => repository.findById(id);
  const add = (user: any) => repository.add(user);
  const deleteById = (id: number) => repository.deleteById(id);
  const updateRepo = (id: number, data: any) => repository.updateUser(id, data);


  return {
    findByProperty,
    countAll,
    findById,
    add,
    deleteById,
    updateRepo
  };
}
