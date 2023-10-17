import updateUserUseCase from "../../domain/use_case/user/update";
import addUser from "../../domain/use_case/user/add";
import getUserById from './../../domain/use_case/user/get';

export default function userController(
  userDbRepository: any,
  userDbRepositoryImpl: any,
  authServiceInterface: any,
  authServiceImpl: any
) {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const addNewUser = (req: any, res: any) => {
    try {
      const { username, password, email, name } = req.body;
      addUser(username, password, email, name, dbRepository, authService)
        .then((user: any) => {
          res.status(201);
          res.json(user);
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
  const getUserByNumberId = async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const user = await getUserById(parseInt(id), dbRepository, authService);
      res.status(200).json(user);
    } catch (err) {
      res.status(400).send(`${err}`);
    }
  };

  const updateUser = async (req: any, res: any) => {
    try {
      const userId = parseInt(req.params["id"]);
      const { username, password, email, name } = req.body;
      updateUserUseCase(username, password, email, name, userId, dbRepository, authService)
        .then((user: any) => {
          res.status(201);
          res.send("update successfully");
        })
        .catch((err: any) => {
          res.status(404);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  }

  return {
    addNewUser,
    getUserByNumberId,
    updateUser
  };
}
