import express from 'express';
import axios from 'axios';

const app = express();

// Start server!
const port = 8000;
app.listen(port, () => {
  console.log('App running on port ', port);
});

// Routing
app.get('/api', (req, res) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((data) => {
      // console.log(data.data);
      // res.status(200).send(data);
      res.send(data.data);
    })
    .catch((err) => {
      return console.log(err);
    });
});

app.post('/', (req, res) => {
  res.end('You can post to this endpoint');
});
