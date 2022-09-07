import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./typeDefs";

export default makeExecutableSchema({ typeDefs });
