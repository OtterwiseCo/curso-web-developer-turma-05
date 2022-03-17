import multer from "fastify-multer";
import path from "path";

import * as PostsController from "../controllers/posts-controller.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: PostsController.getAll,
  },
  {
    method: "POST",
    url: "/posts",
    preHandler: upload.single("cover"),
    handler: PostsController.create,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
