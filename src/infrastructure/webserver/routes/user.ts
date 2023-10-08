import express, { Request, Response } from "express";
import userController from "../../../controller/user/user";
import userRepository from "../../../domain/repository/user";
import userDbRepository from "../../db/user/user";
import authServiceInterface from "../../../domain/service/auth";
import authServiceImpl from "../../service/authService";

const router = express.Router();

const controller = userController(
  userRepository,
  userDbRepository,
  authServiceInterface,
  authServiceImpl
);

router.post("/login", (req: Request, res: Response) =>
  res.send("ini login.js")
);

router.post("/register", controller.addNewUser);

export default router;
