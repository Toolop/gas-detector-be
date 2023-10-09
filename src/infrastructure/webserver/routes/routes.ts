import user from "./user";
import room from "./room";

const routes = (app: any) => {
  app.use("/api/v1", user);
  app.use("/api/v1/rooms", room);
};

export default routes;
