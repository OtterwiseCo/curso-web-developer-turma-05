import { useEffect } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users/2

function ExemploUseEffect(props) {
  const { userId } = props;
  console.log(userId);

  useEffect(() => {
    const request = async () => {
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      console.log(user);
    };
    request();
  }, [userId]);

  return <div>Fetch user com id {userId}</div>;
}

export default ExemploUseEffect;
