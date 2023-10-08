import user from "./user";

const routes = (app: any) => {
  app.use("/api/v1", user);
};

export default routes;
