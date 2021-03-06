const {books, authors} = require('../data/static')

const resolvers = {
    // Query
    Query: {
        books: () => books,
        book: (parent, args) => {
          return books.find(book => book.id.toString() === args.id)
        },
        authors: () => authors,
        author: (parent, args) => {
            return books.find(book => book.id.toString() === args.id)
        }
    },

    Book: {
        author: (parent, args) => {
            return authors.find(author => author.id == parent.authorId)
        },
    },

    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId === parent.id)
        }
    },

    // Mutation
    Mutation: {
        createAuthor: (parent, args) => {
            return  args
        },
        createBook: (parent, args) => {
            return args
        }
    }
}

module.exports = resolvers
