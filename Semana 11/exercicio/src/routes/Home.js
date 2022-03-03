import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { listAllComments } from "../services/comments";

function Home() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const request = async () => {
      try {
        const response = await listAllComments();
        setComments(response.data);
      } catch (error) {}
    };
    request();
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Link to={`/comments/${comment.id}`}>{comment.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
