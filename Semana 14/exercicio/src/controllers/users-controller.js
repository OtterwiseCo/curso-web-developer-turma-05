import { prisma } from "../helpers/utils.js";

export const getAll = async (req, reply) => {
  const take = +req.query.take || 10;
  const skip = +req.query.skip || 0;
  try {
    const users = await prisma.user.findMany({
      skip,
      take,
    });
    return users;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível carregar os usuários");
  }
};
