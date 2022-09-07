import showTypeDefs from '../Show/typeDefs';
import epidsodeTypeDefs from '../Episode/typeDefs';

const typeDefs = `  
    ${showTypeDefs}
    ${epidsodeTypeDefs}

    type Series implements Show {
        id: ID!
        name: String!
        genre: GenreTypes!
        releaseDate: String!
        description: String!
        episodes: [Episode!]!
    }

    input SeriesInput {
        name: String
        genre: String
        releaseDate: String!
    }

    type Query {
        getDuration: String!
        getSeriesOne(id: ID!): Series!
        getSeries(query: String): [Series!]!
        countSeries: Int!
        countParts: Int!
    }

    type Mutation {
        createSeries(input: SeriesInput!): Series!
        upsertSeries(id: ID!, input: SeriesInput!): Series!
        deleteSeries(id: ID!): Series!
    }
`;

export default typeDefs;
