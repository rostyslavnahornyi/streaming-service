import genreTypeDefs from "../Genre/typeDefs";

const typeDefs = `
    ${genreTypeDefs}

    interface Show {
        id: ID!
        name: String!
        genre: GenreTypes!
        releaseDate: String!
    }

    type Query {
        getDuration: String!
        getShows(query: String): [Show!]!
    }
`;

export default typeDefs;
