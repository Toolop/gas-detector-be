export default {
  port: process.env.PORT || 8080,
  ip: process.env.HOST || "localhost",
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237",
  mongodb: process.env.MONGODB || "mongodb://127.0.0.1:27017/gasdetector",
};
