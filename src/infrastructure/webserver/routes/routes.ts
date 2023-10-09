import user from "./user";
import room from "./room";
import sensor from "./sensor";

const routes = (app: any) => {
  app.use("/api/v1", user);
  app.use("/api/v1/rooms", room);
  app.use("/api/v1/sensors", sensor);
};

export default routes;
