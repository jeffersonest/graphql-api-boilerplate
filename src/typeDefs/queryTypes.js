const queryTypes = `
    type Query {
        users: [User!]!
        user(id: ID!): User
    }
`;

module.exports = queryTypes;