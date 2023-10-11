import room from "../../../entities/room";

const addRoom = (name: string, userid: number, repository: any) => {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!name || !userid) {
    throw new Error("room name and userid cannot be empty");
  }

  const newRoom = room(name);


  return repository.add(newRoom).then((room: any) => {
    if (!room.id) {
      throw new Error(`create room id failed to create`);
    } else {
      const result = repository.addRelation(room.id, userid);
      if (result) {
        return room;
      }
      throw new Error(`room id failed to create`);
    }
    //return repository.addRoomUser(roomid, userid);
  });
};

export default addRoom;
