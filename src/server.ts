import depthLimit from 'graphql-depth-limit';
import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { getSchema } from './graphql'
import { config } from './config'

export const runGraphQLServer = async (app: Express): Promise<void> => {

  const schema = await getSchema()

  const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
  });

  server.applyMiddleware({ app, path: '/graphql' });
  const apolloServer = createServer(app);

  apolloServer.listen(
    { port: config.server.port },
    (): void => console.log(`\n🚀 GraphQL is now running on http://${config.server.host}:${config.server.port}/graphql 🚀\n`)
  )

}