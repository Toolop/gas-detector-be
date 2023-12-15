const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  ip: process.env.HOST,
  jwtSecret: process.env.JWT_SECRET,
  mongodb: process.env.MONGODB,
};
