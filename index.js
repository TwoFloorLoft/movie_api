const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

let topMovies = [
  {
    title: 'Dogtooth',
    author: 'Yorgos Lanthimos'
  },
  {
    title: 'Gummo',
    author: 'Harmony Korine'
  },
  {
    title: 'It Follows',
    author: 'David Robert Mitchell'
  },
  {
    title: 'Midsommar',
    author: 'Ari Aster'
  },
  {
    title: 'Us',
    author: 'Jordan Peele'
  },
  {
    title: 'The Witch',
    author: 'Robert Eggers'
  },
  {
    title: 'The Blair Witch Project',
    author: 'Eduardo Sánchez, Daniel Myrick'
  },
  {
    title: 'The Craft',
    author: 'Andrew Fleming'
  },
  {
    title: 'Clueless',
    author: 'Amy Heckerling'
  },
  {
    title: 'Home Alone',
    author: 'John Hughes'
  },
];

// USE ans GET requests

app.use(morgan('common'));

app.use('/documentation.html', express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
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
