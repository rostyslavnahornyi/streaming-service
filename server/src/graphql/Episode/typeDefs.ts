import showtypeDefs from '../Show/typeDefs';

const typeDefs = `  
    ${showtypeDefs}

    type Episode implements Show {
        id: ID!
        name: String!
        genre: GenreTypes!
        releaseDate: String!
        index: Int!
    }

    input EpisodeInput {
        name: String
        genre: String
        releaseDate: String
        index: Int
    }

    type Query {
        getDuration: String!
        getEpisodeOne(id: ID!): Episode!
        getEpisodes(query: String): [Episode!]!
        countEpisodes: Int!
    }

    type Mutation {
        createEpisode(input: EpisodeInput!): Episode!
        upsertEpisode(id: ID!, input: EpisodeInput!): Episode!
        deleteEpisode(id: ID!): Episode!
    }
`;

export default typeDefs;
