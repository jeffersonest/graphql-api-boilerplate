const  {userQuery, userMutation} = require('./userResolvers');

const Query = Object.assign(
    userQuery,
);

const Mutation = Object.assign(
    userMutation,
);

console.log(Query);

module.exports = {
    Query,
    Mutation
}