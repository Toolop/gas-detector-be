import addUser from "../../domain/use_case/user/add";

export default function userController(
  userDbRepository: any,
  userDbRepositoryImpl: any,
  authServiceInterface: any,
  authServiceImpl: any
) {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const addNewUser = (req: any, res: any, next: any) => {
    try {
      const { username, password, email, name } = req.body;
      addUser(username, password, email, name, dbRepository, authService)
        .then((user: any) => {
          res.status(201);
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
    addNewUser,
  };
}
