import user from "./user"

const routes = (app: any) => {
    //place your routes in here..
    app.use("/api/v1", user);
}

export default routes;