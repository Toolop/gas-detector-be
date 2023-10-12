import expressServer from "./infrastructure/webserver/express";
import subscribe from "./infrastructure/mqtt/sensorValue";
expressServer();
subscribe();