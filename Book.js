// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  pageCount: { type: Number, required: true },
  publishedDate: { type: Date, required: true },
  thumbnailUrl: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  status: { type: String, required: true },
  authors: [String],
  categories: [String],
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  discount: { type: Number },
  discountUnits: { type: String }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
