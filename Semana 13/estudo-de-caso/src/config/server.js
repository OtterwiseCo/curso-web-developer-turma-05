import Fastify from "fastify";
import multer from "fastify-multer";
import fastifyStatic from "fastify-static";
import path from "path";
import cors from "fastify-cors";
import postsRoutes from "../routes/posts-routes.js";

const __dirname = path.resolve();

const fastify = Fastify({
  logger: true,
});

fastify.register(multer.contentParser);

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

fastify.register(cors, {
  origin: (origin, cb) => {
    cb(null, true);
    return;
  },
});

fastify.register(postsRoutes);

export default fastify;
