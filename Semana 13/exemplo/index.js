import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/posts", function (request, reply) {
  reply.send({ posts: [] });
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
