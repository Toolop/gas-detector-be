import getRoomsByUserid from "../../domain/use_case/room/getByUser";
import addRoom from "../../domain/use_case/room/add";
import updateRoom from "../../domain/use_case/room/update";
import deleteRoom from './../../domain/use_case/room/delete';
import { Console } from "console";
export default function roomController(
  roomDbRepository: any,
  roomDbRepositoryImpl: any
) {
  const dbRepository = roomDbRepository(roomDbRepositoryImpl());

  const addNewRoom = (req: any, res: any) => {
    try {
      const { name } = req.body;
      const userid = req.token.user.id;
      addRoom(name, userid, dbRepository)
        .then((room: any) => {
          res.status(201);
          res.json(room);
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  const getRooms = (req: any, res: any) => {
    try {
      const userid = req.token.user.id;
      getRoomsByUserid(userid, dbRepository)
        .then((room: any) => {
          res.status(200);
          res.json(room);
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  const updateRoomControl = (req: any, res: any) => {
    try {
      const id = parseInt(req.params.id);
      const { name } = req.body;
      updateRoom(id, name, dbRepository)
        .then((room: any) => {
          res.status(200);
          res.json(room);
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  }

  const deleteRoomControl = (req: any, res: any) => {
    try {
      const id = parseInt(req.params.id);
      deleteRoom(id, dbRepository)
        .then((room: any) => {
          res.status(200);
          res.send("Delete success");
        })
        .catch((err: any) => {
          res.status(400);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  }
    

  return {
    addNewRoom,
    getRooms,
    updateRoomControl,
    deleteRoomControl
  };
}
