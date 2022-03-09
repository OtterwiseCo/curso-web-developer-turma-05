import { useForm } from "react-hook-form";
import { login } from "./services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Stack, Flex, Text } from "@chakra-ui/react";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required("Email é obrigatório"),
    password: yup
      .string()
      .min(5, "Precisa ter no mínimo 5 caracteres")
      .required("Senha é obrigatória"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(errors);

  return (
    <Flex
      as="form"
      mt="20px"
      justifyContent="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack spacing={3} w={["100%", "300px"]} p={3}>
        <Text textAlign="center" fontSize="20px">
          Meu formulário de login
        </Text>
        <Input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <Input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}

        <Button colorScheme="blue" type="submit">
          Enviar
        </Button>
      </Stack>
    </Flex>
  );
}

export default App;
