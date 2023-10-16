const getRoomDetailUseCase = (roomId: number, repository: any) => {
  return repository.findById(roomId).then((room: any) => {
    if (room != null) {
      return room;
    }
    throw new Error("room not found");
  });
};

export default getRoomDetailUseCase;
