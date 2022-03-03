import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComment } from "../services/comments";

function Comment() {
  const [comment, setComment] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getComment(id);
        setComment(response.data);
      } catch (error) {}
    };
    request();
  }, [id]);

  if (!comment) return <p>Não há nada para ser mostrado</p>;

  return (
    <div>
      <p>name: {comment.name}</p>
      <p>body: {comment.body}</p>
      <p>email: {comment.email}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Comment;
