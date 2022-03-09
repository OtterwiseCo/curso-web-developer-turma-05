import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createPost } from "./services/posts";

const schema = yup
  .object({
    title: yup.string().required("Título do post é obrigatório"),
    body: yup
      .string()
      .min(30, "Precisa ter no mínimo 30 caracteres")
      .required("Conteúdo do post é obrigatório"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await createPost(data);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Título do post" {...register("title")} />
      {errors.title && <span>{errors.title.message}</span>}
      <textarea placeholder="conteúdo" {...register("body")} />
      {errors.body && <span>{errors.body.message}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
