import express from "express";
import userController from "../../../controller/user/user";
import authController from "../../../controller/auth/auth";
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

const auth = authController(
    userRepository,
    userDbRepository,
    authServiceInterface,
    authServiceImpl
);

router.post("/login", auth.login);

router.post("/register", controller.addNewUser);

export default router;
