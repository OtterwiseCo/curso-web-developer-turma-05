import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Olá, você está na home</h1>
      <Link to="/posts">Ir para página de posts</Link>
    </div>
  );
}

export default Home;
