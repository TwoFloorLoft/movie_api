const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

let topMovies = [
  {
    title: 'Dogtooth',
    director: 'Yorgos Lanthimos'
  },
  {
    title: 'Gummo',
    director: 'Harmony Korine'
  },
  {
    title: 'It Follows',
    director: 'David Robert Mitchell'
  },
  {
    title: 'Midsommar',
    director: 'Ari Aster'
  },
  {
    title: 'Us',
    director: 'Jordan Peele'
  },
  {
    title: 'The Witch',
    director: 'Robert Eggers'
  },
  {
    title: 'The Blair Witch Project',
    director: 'Eduardo Sánchez, Daniel Myrick'
  },
  {
    title: 'The Craft',
    director: 'Andrew Fleming'
  },
  {
    title: 'Clueless',
    director: 'Amy Heckerling'
  },
  {
    title: 'Home Alone',
    director: 'John Hughes'
  },
];

// USE and GET requests

app.use(morgan('common'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/documentation', (req, res) => {
	res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies/:movieTitle', (req, res) => {
  res.send('Successful GET request of a movie title.');
}); 

app.get('/genres/:genre', (req, res) => {
  res.send('Successful GET request of all major genres in the movie field.');
}); 

app.get('/directors/:directorName', (req, res) => {
  res.send('Successful GET request of directors information.');
}); 

app.post('/register', (req, res) => {
  res.send('Successful POST to the server a new users information.');
}); 

app.put('/users/:ID/:infoToUpdate/:newValue', (req, res) => {
  res.send('Successful PUT to update users username information.');
}); 

app.post('/users/:ID/favorites/:newFavorite', (req, res) => {
  res.send('Successful POST to the server for a new favorite movie on a specific users profile.');
}); 

app.delete('/users/:id/unregister', (req, res) => {
  res.send('Successful DELETE to the server that removes a user from the database.');
}); 

app.delete('/users/:ID/favorites/:deleteFavorite', (req, res) => {
  res.send('Successful DELETE of a movie from an individual users favorite list on the database.');
}); 

// Error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Babes, try again');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
