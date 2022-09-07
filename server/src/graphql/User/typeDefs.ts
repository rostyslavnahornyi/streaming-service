import subscriptionTypeDefs from "../Subscription/typeDefs"

const typeDefs = `
    ${subscriptionTypeDefs}

    type User {
        id: ID!
        email: String
        username: String
        avatarURL: String
        subscriptions: [Subscription!]!
    }

    input UserInput {
        username: String
        imgUrl: String
    }

    type Query {
        findUsers(query: String): [User!]!
        findUserOne(id: ID!): User!
        countUsers: Int!
        getSubscriptions: [Subscription!]!
    }

    type Mutation {
        deleteUser(id: ID!): User
        upsertUser(id: ID!, input: UserInput!): User
        subscribe(streamingService: ID!): Subscription!
    }
`;

export default typeDefs;