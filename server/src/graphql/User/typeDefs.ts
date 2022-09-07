const typeDefs = `
    type User {
        id: ID!
        email: String
        username: String
        avatarURL: String
    }

    input UserInput {
        username: String
        imgUrl: String
    }

    type Query {
        findUsers(query: String): [User!]!
        findUserOne(id: ID!): User!
        countUsers: Int!
    }

    type Mutation {
        deleteUser(id: ID!): User
        upsertUser(id: ID!, input: UserInput!): User
    }
`;

export default typeDefs;