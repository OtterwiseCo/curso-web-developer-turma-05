import {
  prisma,
  hashPassword,
  comparePassword,
  createAccessToken,
} from "../helpers/utils.js";

export const login = async (req, reply) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return reply.status(401).send("Usuário ou senha incorretos");
    }

    if (!(await comparePassword(password, user.password))) {
      return reply.status(401).send("Usuário ou senha incorretos");
    }

    const { password: pass, ...data } = user;
    return reply.send({
      user: data,
      accessToken: await createAccessToken(data),
    });
  } catch (error) {
    console.log(error);
    reply.status(500).send("erro inesperado");
  }
};

export const signUp = async (req, reply) => {
  const { email, password: pass } = req.body;
  console.log(req.body);
  try {
    const password = await hashPassword(pass);
    const { password: hashedPassword, ...user } = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    reply.status(400).send("Usuário já existe");
  }
};
