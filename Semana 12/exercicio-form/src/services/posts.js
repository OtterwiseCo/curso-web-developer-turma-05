import client from "../providers/client";

export const createPost = (data) => client.post("/posts", data);
