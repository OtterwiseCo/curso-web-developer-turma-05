import postsRoutes from "./posts-routes.js";
import usersRoutes from "./user-routes.js";

const routes = [...postsRoutes, ...usersRoutes];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
