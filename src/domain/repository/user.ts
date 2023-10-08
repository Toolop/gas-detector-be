export default function userRepository(repository: any) {
  const findByProperty = (params: any) => repository.findByProperty(params);
  const countAll = (params: any) => repository.countAll(params);
  const findById = (id: any) => repository.findById(id);
  const add = (user: any) => repository.add(user);
  const deleteById = (id: number) => repository.deleteById(id);

  return {
    findByProperty,
    countAll,
    findById,
    add,
    deleteById,
  };
}
