import axios from "axios";

import { promise } from "./promise.js";

promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

const helperPromise = () => promise;

// async/await

const demoPromise = async () => {
  try {
    const response = await helperPromise();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

demoPromise();

// Precisa executar duas requisições em paralelo e só podemos seguir com a execução do código, quando ambaas terminarem

const allPromises = async () => {
  const promises = [helperPromise(), helperPromise()];
  try {
    const response = await Promise.all(promises);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

allPromises();

const racePromises = async () => {
  const promises = [helperPromise(), helperPromise()];
  try {
    const response = await Promise.race(promises);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

racePromises();

// https://jsonplaceholder.typicode.com/

const URL = "https://jsonplaceholder.typicode.com/";

const get = async () => {
  try {
    const response = await axios.get(URL + "posts");
    console.log("GET", response.data);
  } catch (error) {
    console.log(error);
  }
};

get();

const post = async () => {
  try {
    const blogPost = {
      title: "Título do meu post",
      body: "Conteúdo do meu post",
      userId: 1,
    };
    const response = await axios.post(URL + "posts", blogPost);
    console.log("POST", response.data);
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
};

post();

const put = async () => {
  try {
    const blogPost = {
      title: "Título do meu post",
      body: "Conteúdo do meu post",
      userId: 2,
      id: 1,
    };
    const response = await axios.put(URL + "posts/1", blogPost);
    console.log("PUT", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

put();

const patch = async () => {
  try {
    const blogPost = {
      title: "Título do meu post",
    };
    const response = await axios.patch(URL + "posts/1", blogPost);
    console.log("PATCH", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

patch();

const getComments = async () => {
  try {
    const response = await axios.get(URL + "posts/1/comments");
    console.log("GET COMMENTS FROM ID 1", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

getComments();

const getPost = async () => {
  try {
    const response = await axios.get(URL + "posts/2");
    console.log("GET POST WITH ID 2", response.data);
  } catch (error) {
    console.log(error.message);
  }
};

getPost();

const delPost = async () => {
  try {
    const response = await axios.delete(URL + "posts/1");
    console.log("DELETE POST WITH ID 1", response.data);
    console.log(response.status);
  } catch (error) {
    console.log(error.message);
  }
};

delPost();
