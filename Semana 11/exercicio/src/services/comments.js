import client from "../providers/client";

export const listAllComments = () => client.get("/comments");

export const getComment = (id) => client.get(`comments/${id}`);
