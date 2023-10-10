import getRoomsByUserid from "../../domain/use_case/room/getByUser";
import addRoom from "../../domain/use_case/room/add";
import updateRoom from "../../domain/use_case/room/update";
export default function roomController(
  roomDbRepository: any,
  roomDbRepositoryImpl: any
) {
  const dbRepository = roomDbRepository(roomDbRepositoryImpl());

  const addNewRoom = (req: any, res: any, next: any) => {
    try {
      const { name } = req.body;
      const userid = req.token.user.id;
      addRoom(name, userid, dbRepository)
        .then((room: any) => {
          res.status(201);
          res.json(room);
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

  const getRooms = (req: any, res: any, next: any) => {
    try {
      const userid = req.token.user.id;
      getRoomsByUserid(userid, dbRepository)
        .then((room: any) => {
          res.status(200);
          res.json(room);
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

  const updateRoomControl = (req: any, res: any, next: any) => {
    try {
      const id = parseInt(req.params.id);
      const { name } = req.body;
      updateRoom(id, name, dbRepository)
        .then((room: any) => {
          res.status(200);
          res.json(room);
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
  }

  return {
    addNewRoom,
    getRooms,
    updateRoomControl
  };
}
