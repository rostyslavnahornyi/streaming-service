import { ApolloServer } from "apollo-server-express";
import express from "express";
import * as dotenv from "dotenv";
import { GraphQLError } from "graphql";
import { rootSchema } from "./graphql/rootScheme";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { mongoConnection } from "./db/connection";
import { createGraphQLError } from "@graphql-tools/utils";
import { getUser } from "./utils/getUser";
import { IContext } from "./utils/interfaces/IResolverMap";

const app: express.Application = express();
dotenv.config();

const PORT = process.env.PORT || 4000;

(async function () {
    const server = new ApolloServer({
        schema: rootSchema,
        context: ({ req, res }): IContext => {
            const user = getUser(req);

            return {
                user,
                req,
                res,
            };
        },
        formatError: (error: GraphQLError) => createGraphQLError(error.message),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });

    await server.start();
    server.applyMiddleware({ app });
})();

mongoConnection();
app.listen(PORT, () =>
    console.log(`> Server starts at http://localhost:${PORT}/graphql`)
);
