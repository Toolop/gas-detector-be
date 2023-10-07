import express, { Request, Response } from "express";
import register from "../../../controller/user/register";
const router = express.Router()

router.get('/login', (req: Request, res: Response) => res.send("ini login.js"));

router.get('/register', register);

export default router;