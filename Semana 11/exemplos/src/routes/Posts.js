import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { listAllPosts, getPost } from "../services/posts";

function Posts() {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts({ userId });
      setPosts(response.data);
      console.log(response);
    };
    request();
  }, []);

  if (!posts) return <p>Não há posts a serem exibidos</p>;
  if (id) return <p>{posts.title}</p>;
  return posts?.map((post) => <p>{post.title}</p>);
}

export default Posts;
