import client from "../providers/client";

export const createPost = (data) => client.post("/posts", data);

export const getAllPosts = () => client.get("posts");
