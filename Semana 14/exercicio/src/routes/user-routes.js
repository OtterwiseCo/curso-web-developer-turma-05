import * as UsersController from "../controllers/users-controller.js";

const routes = [
  {
    method: "GET",
    url: "/users",
    handler: UsersController.getAll,
  },
];

export default routes;
