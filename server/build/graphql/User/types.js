"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `
    type User {
        id: ID!
        email: String!
        username: String
        imgUrl: String
        role: String
    }

    type UserInput {
        username: String
        imgUrl
    }

    type Query {
        UserFind(query: String): [User!]!
        UserFindOne(id: ID!): User
        UserCount(): Int
    }

    type Mutations {
        UserDelete(id: ID!)
        UserUpsert(id: ID!, input: UserInput): User
    }
`;
exports.default = typeDefs;
