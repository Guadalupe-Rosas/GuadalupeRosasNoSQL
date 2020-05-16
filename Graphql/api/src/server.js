const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({req}) {
        //const isAuth = req.headers.authorization
        const user = db.get('user').value()
        if (!user) throw new Error('Not auth')
        return {models, db, user}
        //return { models, db }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});