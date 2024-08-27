import { db } from "../db/db.mjs";

export const Query = {
  hello: (_, { name }) => `Hello from ${name}!`,
  getTodos: (parent, args, context, info) => {
    // console.log(parent);
    // console.log(args);
    // console.log("context", context);
    // console.log("info", info);

    return db.todos;
  },
  getTodoById: (parent, { id }, context, info) => {
    const todo = db.todos.map((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`le todo de id: ${id} n'existe pas`);
    }
    return todo;

    // return db.todos.find((todo) => todo.id === id);
    // console.log(id);
  },
};
