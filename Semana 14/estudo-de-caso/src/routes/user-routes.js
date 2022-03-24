import * as UsersController from "../controllers/users-controller.js";
import { validateRequest } from "../middlewares/auth.js";

const routes = [
  {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UsersController.getAll,
  },
];

export default routes;
