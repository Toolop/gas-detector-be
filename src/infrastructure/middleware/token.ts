import authServiceImpl from "../service/authService";
import authServiceInterface from "../../domain/service/auth";
import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Get token from header
  const token = req.header("Authorization");
  const authService = authServiceInterface(authServiceImpl());
  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "Error",
      errors: "No token provided",
    });
  }
  if (token.split(" ")[0] !== "Bearer") {
    return res.status(500).send({
      auth: false,
      message: "Error",
      errors: "Incorrect token format",
    });
  }
  try {
    const decoded = authService.verify(token.split(" ")[1]);
    (req as CustomRequest).token = decoded;
    next();
  } catch (err) {
    return res.status(400).send({
      auth: false,
      message: "Invalid Token",
      errors: err,
    });
  }
}
