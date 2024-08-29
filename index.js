// const jsonServer = require('json-server');
// const cors = require('cors'); // Import cors package
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Use CORS middleware

// const corsOptions = {
//     origin: 'https://e-book-mart.vercel.app/', // Replace with your front-end domain
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true
//   };
  
//   server.use(cors(corsOptions));
  
// server.use(middlewares);
// server.use(router);

// const port = process.env.PORT || 3001;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });


// server.js
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const Book = require('./Book');

const app = express();
const port = process.env.PORT || 3000;

// CORS options
const corsOptions = {
  origin: 'https://e-book-mart.vercel.app/', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE', // Allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Allowed headers
};

// Middleware
app.use(cors(corsOptions)); // Use cors middleware with options
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mtanveercs:mtanveercs@cluster0.8exq3.mongodb.net/bookmart')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  app.get('/', async (req, res) => {
    try {
     
      res.json('books');
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
// Endpoint to get all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Export handler for Vercel
module.exports = (req, res) => {
  // Use express middleware
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
