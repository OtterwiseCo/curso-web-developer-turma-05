window.onload = () => {
  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    const task = document.querySelector("#minha-tarefa");
    task.remove();
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {
      title: formData.get("title"),
      body: formData.get("body"),
      userId: formData.get("userId"),
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        event.target.reset();
        console.log(json);
      });
  });
};
