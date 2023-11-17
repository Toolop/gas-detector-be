import checkAuth from "../../domain/use_case/auth/auth";

const authController = (
  userDbRepository: any,
  userDbRepositoryImpl: any,
  authServiceInterface: any,
  authServiceImpl: any
) => {
  const dbRepository = userDbRepository(userDbRepositoryImpl());
  const authService = authServiceInterface(authServiceImpl());

  const login = (req: any, res: any) => {
    try {
      const { username, password } = req.body;
      checkAuth(username, password, dbRepository, authService)
        .then((user: any) => {
          res.status(200);
          res.json(user);
        })
        .catch((err: any) => {
          res.status(401);
          res.send(`${err}`);
        });
    } catch (err) {
      res.status(400);
      res.send(`${err}`);
    }
  };

  return {
    login,
  };
};

export default authController;
