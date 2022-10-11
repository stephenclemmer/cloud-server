'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World! Welcome to this simple server!');
})

app.get('/hello', (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Greetings ${name}!`);
});

app.listen(PORT, () => console.log('Listening on ', PORT));
