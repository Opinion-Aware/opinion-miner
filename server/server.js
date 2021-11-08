const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// allows for cross origin requests
app.use(cors()); 

/**
 * require routers
 */
const carouselRouter = require('./routes/carousel');
const sentimentRouter = require('./routes/sentiment');

// handle parsing request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve home page
app.get('/', (req, res) => res.status(200).send('Home Page'));

// handle requests for static files
// app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// Setup router for sentiment data 
app.use('/sentiment', sentimentRouter);

// Setup router for carousel data 
app.use('/carousel', carouselRouter);

// catch-all route handler for any requests to an unknown route 
app.use((req, res) => {
  res.statusCode = 404;
  res.send(`Error code ${res.statusCode} sorry`);
});

// express global handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = {};
  Object.assign(errorObj, defaultErr);
  console.log(errorObj);
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;