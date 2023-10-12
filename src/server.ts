import expressServer from "./infrastructure/webserver/express";
import subscribe from "./infrastructure/mqtt/sensorValue";
import connectMongoose from "./infrastructure/mongoDb/connect/connect";
expressServer();
subscribe();
connectMongoose();