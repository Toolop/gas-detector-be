import user from "./user";
import room from "./room";
import sensor from "./sensor";

const routes = (app: any) => {
  app.use("/api/v1", user);
  app.use("/api/v1/rooms", room);
  app.use("/api/v1/sensors", sensor);
  app.use((req: any, res: any, next: any) => {
    res.status(404).json({
      message: '404 not found'
    })
  })

};

export default routes;
