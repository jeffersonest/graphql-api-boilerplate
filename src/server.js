const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

mongoose.connect('mongodb://admin:admin@localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('Server runing! AT 4000')
});