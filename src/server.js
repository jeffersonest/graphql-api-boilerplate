const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const path = require('path');

mongoose.connect('mongodb://admin:admin@localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
})

server.start(()=>{
    console.log('Server runing! AT 4000')
});