import { useState } from "react";
import Button from "../Button";

function Exemplo1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
    </div>
  );
}

export default Exemplo1;
