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
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId },
        },
      },
    });
    reply.send(post);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o post");
  }
};
