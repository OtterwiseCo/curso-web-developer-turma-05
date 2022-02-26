import { useEffect, useReducer, useState } from "react";
import axios from "axios";

import Button from "../Button";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return initialState;
    case "pending":
      return {
        ...state,
        status: "pending",
      };
    case "error":
      return {
        status: "error",
        error: action.error,
      };
    case "success":
      return {
        data: action.data,
        status: "success",
        error: null,
      };
    default:
      break;
  }
};

function AulaTeorica() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [option, setOption] = useState(false);

  useEffect(() => {
    const request = async () => {
      try {
        dispatch({ type: "pending" });
        const response = await axios(
          `https://jsonplaceholder.typicode.com/users`,
        );
        console.log(response);
        dispatch({ type: "success", data: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "error", error: error.message });
      }
    };
    if (!option) return;
    request();
  }, [option]);

  return (
    <div>
      <Button onClick={() => setOption(true)}>Users</Button>
      <p>Status da requisição: {state.status}</p>
      <p>{JSON.stringify(state.data)}</p>
    </div>
  );
}

export default AulaTeorica;
