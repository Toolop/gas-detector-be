import express, { Request, Response } from "express";
const router = express.Router()

router.get('/login', (req: Request, res: Response) => res.send("ini login.js"));

router.get('/register', (req: Request, res: Response) => res.send("ini register.js"));

export default router;