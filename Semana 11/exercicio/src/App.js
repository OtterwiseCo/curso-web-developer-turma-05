import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Comment from "./routes/Comment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comments/:id" element={<Comment />} />
      <Route path="*" element={<p>Rota não encontrada. 404</p>} />
    </Routes>
  );
}

export default App;
