import room from "../../../entities/room";
import roomOnUser from "../../../entities/roomOnUser";

const addRoom = (name: string, repository: any) => {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!name) {
    throw new Error("room name cannot be empty");
  }

  const newUser = room(name);

  return repository.then((userWithUsername: any) => {
    return repository.add(newUser);
  });
};

export default addRoom;
