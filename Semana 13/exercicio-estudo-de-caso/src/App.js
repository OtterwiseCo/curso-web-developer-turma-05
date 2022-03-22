import "./App.css";

function App() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert(error.response.message);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título do post" />
        <input type="text" name="content" placeholder="Conteudo do post" />
        <input type="file" name="cover" accept="image/png, image/jpeg" />
        <button>enviar</button>
      </form>
    </div>
  );
}

export default App;
