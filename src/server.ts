import expressServer from "./infrastructure/webserver/express";
import subscribe from "./infrastructure/mqtt/sensorValue";
import connectMongoose from "./infrastructure/mongoDb/connect/connect";
import publishCondtion from "./controller/client/condition";
expressServer();
subscribe();
connectMongoose();
publishCondtion();
