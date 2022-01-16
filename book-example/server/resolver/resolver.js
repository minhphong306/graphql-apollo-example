const {books, authors} = require('../data/static')

const resolvers = {
    Query: {
        books: () => books,
        book: (parents, args) => {
          return books.find(book => book.id.toString() === args.id)
        },
        authors: () => authors,
        author: (parents, args) => {
            return books.find(book => book.id.toString() === args.id)
        }
    }
}

module.exports = resolvers
