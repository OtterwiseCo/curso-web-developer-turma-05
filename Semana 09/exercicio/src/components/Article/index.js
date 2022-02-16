import "./Article.css";

function Article(props) {
  const { title, description } = props;
  return (
    <div className="article">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Article;
