const mongoose = require('mongoose')
const Schema = mongoose.Schema

var bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: String,
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
