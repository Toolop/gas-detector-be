import addRoom from "../../domain/use_case/room/add";

export default function roomController(
  roomDbRepository: any,
  roomDbRepositoryImpl: any
) {
  const dbRepository = roomDbRepository(roomDbRepositoryImpl());

  const addNewRoom = (req: any, res: any, next: any) => {
    try {
      const { name } = req.body;
      console.log(req.Token);
      addRoom(name, dbRepository)
        .then((user: any) => {
          res.status(200);
          res.json(user);
          next();
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
          next();
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
      next();
    }
  };

  return {
    addNewRoom,
  };
}
