import streamingServiceTypeDefs from "../StreamingService/typeDefs";
import genreTypeDefs from "../Genre/typeDefs";
import showTypeDefs from "../Show/typeDefs";

const typeDefs = `  
    ${streamingServiceTypeDefs}
    ${genreTypeDefs}
    ${showTypeDefs}

    type Subscription {
        id: ID!
        streamingService: StreamingService!
    }

    type Query {
        getRecommendationTrending: Show!
        getRecommendationByGenre(genre: GenreTypes): Show!
    }

    type Mutation {
        watch(showId: ID!): Show
    }
`;

export default typeDefs;
