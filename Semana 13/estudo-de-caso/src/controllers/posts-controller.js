import { prisma } from "../helpers/utils.js";

export const getAll = async function (_, reply) {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    reply.status(500).send("Não foi possível carregar os posts");
  }
};

export const create = async (req, reply) => {
  const { title, content } = req.body;
  console.log(req.body);
  console.log(req.file);
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        cover: req.file.path,
      },
    });
    reply.send(post);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o post");
  }
};
