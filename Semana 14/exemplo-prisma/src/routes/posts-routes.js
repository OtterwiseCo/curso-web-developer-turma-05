import * as PostsController from "../controllers/posts-controller.js";

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: PostsController.getAll,
  },
  {
    method: "POST",
    url: "/posts",
    handler: PostsController.create,
    schema: {
      body: {
        type: "object",
        required: ["title", "content", "authorId"],
        properties: {
          title: { type: "string" },
          content: { type: "string" },
          authorId: { type: "number" },
        },
      },
    },
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
