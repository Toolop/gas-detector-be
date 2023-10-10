const getRoomsByUserid = (userid: number, repository: any) => {
  if (!userid) {
    throw new Error("user id cannot be empty");
  }
  return repository.findByPropertyRelation({ userId: userid });
};

export default getRoomsByUserid;
