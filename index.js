const jsonServer = require('json-server');
const cors = require('cors'); // Import cors package
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Use CORS middleware

const corsOptions = {
    origin: 'https://e-book-mart.vercel.app/', // Replace with your front-end domain
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  };
  
  server.use(cors(corsOptions));
  
server.use(middlewares);
server.use(router);

// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });
module.exports = app;