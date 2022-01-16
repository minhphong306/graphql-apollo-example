const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const init = async () => {
    // Load schema & resolvers
    const typeDefs = require('./schema/schema')
    const resolvers = require('./resolver/resolver')

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    const app = express()
    await server.start()
    server.applyMiddleware({app})

    app.listen(4000, () => {
        console.log(`Server is running at: http://localhost:4000${server.graphqlPath}`)
    })
}

init()
