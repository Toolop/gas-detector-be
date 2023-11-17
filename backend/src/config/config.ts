export default {
  port: process.env.PORT || 8080,
  ip: process.env.HOST || "backend",
  jwtSecret: process.env.JWT_SECRET || "jkl!±@£!@ghj1237",
  mongodb: process.env.MONGODB || "mongodb://aqms:aqms@mongodb:27017",
};
