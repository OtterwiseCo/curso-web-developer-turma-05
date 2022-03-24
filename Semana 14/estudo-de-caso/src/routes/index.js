import authRoutes from "./auth-routes.js";
import usersRoutes from "./user-routes.js";

const routes = [...authRoutes, ...usersRoutes];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
