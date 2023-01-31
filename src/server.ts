import "reflect-metadata";
import path from "node:path";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PrismaClient } from "@prisma/client";
import {
  FindFirstMovieResolver,
  FindUniqueMovieResolver,
  FindManyMovieResolver,
  CreateOneMovieResolver,
  CreateManyMovieResolver,
  UpdateOneMovieResolver,
  UpdateManyMovieResolver,
  DeleteOneMovieResolver,
  DeleteManyMovieResolver
} from "../prisma/generated/type-graphql";

interface Context {
  prisma: PrismaClient;
}

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      FindFirstMovieResolver,
      FindUniqueMovieResolver,
      FindManyMovieResolver,
      CreateOneMovieResolver,
      CreateManyMovieResolver,
      UpdateOneMovieResolver,
      UpdateManyMovieResolver,
      DeleteOneMovieResolver,
      DeleteManyMovieResolver
    ],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "schema.gql")
  });

  const server = new ApolloServer<Context>({
    schema
  });

  const prisma = new PrismaClient();

  const { url } = await startStandaloneServer(server, {
    context: async (): Promise<Context> => ({ prisma }),
    listen: { port: 4000 }
  });

  console.log(`🚀  Server ready at: ${url}`);
}

bootstrap();
