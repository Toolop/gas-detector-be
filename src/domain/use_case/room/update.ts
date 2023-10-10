const updateRoom = async (id: number, name: string, roomRepository: any) => {
  return await roomRepository.findById(id)
    .then((room: any) => {
      if (room === null) {
        throw new Error(`room not found`);
      }
      return roomRepository.updateById(id, name);
    });
}

export default updateRoom;