import client from "../providers/client";

export const listAllPosts = (params) => client.get("/posts", { params });

export const getPost = (id) => client.get(`/posts/${id}`);
