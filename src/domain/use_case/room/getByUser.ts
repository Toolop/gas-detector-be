const getRoomsByUserid = (userid: number, repository: any) => {
  if (!userid) {
    throw new Error("user id cannot be empty");
  }
  return repository.findByProperty({ id: userid });
};

export default getRoomsByUserid;
