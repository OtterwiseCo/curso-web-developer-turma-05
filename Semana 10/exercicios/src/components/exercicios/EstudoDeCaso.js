import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../Button";
import List from "../List";

function EstudoDeCaso() {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      try {
        setIsLoading(true);
        const response = await axios(
          `https://jsonplaceholder.typicode.com/${option}`,
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!option) return;
    request();
  }, [option]);

  if (isLoading && option) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div>
      <Button onClick={() => setOption("users")}>Users</Button>
      <Button onClick={() => setOption("todos")}>Todos</Button>
      <Button onClick={() => setOption("posts")}>Posts</Button>
      <List data={data} />
    </div>
  );
}

export default EstudoDeCaso;
