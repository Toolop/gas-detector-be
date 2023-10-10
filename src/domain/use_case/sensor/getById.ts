const getSensors = (roomId: number, repository: any) => {
  if (roomId) {
    return repository.findByProperty({ roomId: roomId });
  } else {
    return repository.findAll();
  }
};

export default getSensors;
