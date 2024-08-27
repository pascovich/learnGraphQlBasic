import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema/schema.js";

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

// Démarrer le serveur
server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
