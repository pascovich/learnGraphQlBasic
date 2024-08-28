import { createSchema } from "graphql-yoga";
import { Query } from "../resolvers/Query.mjs";

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    enum todoStatusEnum {
      WAITING
      INPROGRESS
      CANCELED
      DONE
    }
    type Query {
      hello(name: String): String!
      getTodos: [todo]!
      getTodoById(id: Int): todo!
    }
    type todo {
      id: ID!
      name: String
      content: String!
      status: todoStatusEnum!
      user: user!
    }
    type user {
      id: ID!
      name: String!
      email: String!
      todos: [todo]
    }
  `,
  resolvers: {
    Query,
  },
});
// 0975925535
// GW15944
