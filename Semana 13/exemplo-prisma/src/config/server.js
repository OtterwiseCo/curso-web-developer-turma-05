import Fastify from "fastify";
import postsRoutes from "../routes/posts-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(postsRoutes);

export default fastify;
