import client from "../providers/client";

export const listAllUsers = () => client.get("/users");

export const createUser = (data) => client.post("/users", data);
