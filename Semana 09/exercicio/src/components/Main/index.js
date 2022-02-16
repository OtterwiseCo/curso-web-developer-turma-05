import Article from "../Article";

const data = [
  {
    title: "Título 1",
    description: "descrição do artigo 1",
  },
  {
    title: "Título 2",
    description: "descrição do artigo 2",
  },
  {
    title: "Título 3",
    description: "descrição do artigo 3",
  },
  {
    title: "Título 4",
    description: "descrição do artigo 4",
  },
  {
    title: "Título 5",
    description: "descrição do artigo 5",
  },
  {
    title: "Título 6",
    description: "descrição do artigo 6",
  },
  {
    title: "Título 7",
    description: "descrição do artigo 7",
  },
];

function Main() {
  return (
    <main>
      {data.map((article) => (
        <Article title={article.title} description={article.description} />
      ))}
    </main>
  );
}

export default Main;
