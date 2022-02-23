import { useState, useEffect } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/

const options = ["users", "todos", "posts"];

function ExercicioHooks() {
  const [resource, setResource] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const request = async () => {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`,
      );
      setResponse(resp.data);
    };
    if (!resource) return;
    request();
  }, [resource]);

  return (
    <div>
      <button
        onClick={() =>
          setResource(options[Math.floor(Math.random() * options.length)])
        }
      >
        Gerar recurso
      </button>
      <p>O recurso a ser carregado é: {resource}</p>
      <p>{JSON.stringify(response)}</p>
    </div>
  );
}

export default ExercicioHooks;
