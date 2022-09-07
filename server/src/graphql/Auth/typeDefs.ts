const typeDefs = `  
    type User {
        id: ID!
        email: String
        username: String
    }

    type Token {
        token: String
    }

    type Query {
        login(email: String!, password: String!): Token!
    }

    type Mutation {
        register(email: String!, password: String!, username: String): Token!
        changePassword(currentPassword: String!, newPassword: String!): User!
    }
`;

export default typeDefs;
