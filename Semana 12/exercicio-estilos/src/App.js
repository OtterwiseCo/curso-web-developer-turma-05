import { Routes, Route } from "react-router-dom";
import CreatePost from "./routes/CreatePost";
import ListPosts from "./routes/ListPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPosts />} />
      <Route path="/posts/create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
