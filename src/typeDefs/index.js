const userTypes = require('./userTypes');
const queryTypes = require('./queryTypes');
const mutationTypes = require('./mutationTypes');

const typeDefs = [userTypes, queryTypes, mutationTypes];

module.exports = typeDefs