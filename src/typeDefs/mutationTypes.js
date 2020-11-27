const mutationTypes = `
    type Mutation {
        createUser(
            name: String!,
            email: String!
            ): User
    }
`

module.exports = mutationTypes;