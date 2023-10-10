const deleteRoom = (
  id: number,
  repository: any
) => {
  return repository
    .findById(id)
    .then((room: any) => {
      if (room === null) {
        throw new Error(`room with id: ${id} does not exist`);
      }
      return repository.deleteById(id);
    });
}

export default deleteRoom;