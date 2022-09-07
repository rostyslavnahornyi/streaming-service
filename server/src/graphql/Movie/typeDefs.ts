import genreTypeDefs from "../Genre/typeDefs";
import showTypeDefs from '../Show/typeDefs';

const typeDefs = `  
    ${genreTypeDefs}
    ${showTypeDefs}

    type Movie implements Show {
        id: ID!
        name: String!
        genre: GenreTypes!
        releaseDate: String!
    }

    input MovieInput {
        name: String
        genre: String
        releaseDate: String
    }

    type Query {
        getDuration: String!
        getMovieOne(id: ID!): Movie!
        getMovies(query: String): [Movie!]!
        countMovies: Int!
    }

    type Mutation {
        createMovie(input: MovieInput!): Movie!
        upsertMovie(id: ID!, input: MovieInput!): Movie!
        deleteMovie(id: ID!): Movie!
    }
`;

export default typeDefs;
