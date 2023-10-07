import express, { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

}

export default register