import Fastify from "fastify";
import routes from "../routes/index.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

export default fastify;
