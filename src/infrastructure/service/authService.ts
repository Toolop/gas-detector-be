import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const config = require("../../config/config");

export default function authService() {
  const encryptPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const compare = (password: string, hashedPassword: string) =>
    bcrypt.compareSync(password, hashedPassword);

  const verify = (token: string) => jwt.verify(token, config.jwtSecret);

  const generateToken = (payload: any) =>
    jwt.sign(payload, config.jwtSecret, {
      expiresIn: 360000,
    });

  return {
    encryptPassword,
    compare,
    verify,
    generateToken,
  };
}
