import showTypeDefs from "../Show/typeDefs";

const typeDefs = `  
    ${showTypeDefs}

    type StreamingService {
        id: ID!
        name: String!
        shows: [Show!]!
        viewsByShowNames: [viewsByShowNames!]!
    }

    input StreamingServiceInput {
        name: String!
    }

    type viewsByShowNames {
        show: Show!
        views: Int!
    }

    type Query {
        getMostViewedShowsOfYear(year: Int): [Show!]!
        getMostViewedShowsOfGenre(genre: GenreTypes): [Show!]!
        getViewsByShowNames: viewsByShowNames!
    }

    type Mutation {
        createStreamingService(name: String!): StreamingService!
        upsertStreamingService(id: ID!, input: StreamingServiceInput): StreamingService!
        deleteStreamingService(id: ID!): StreamingService
    }
`;

export default typeDefs;
