const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const catsController = require('./controllers/cats');

app.use('/cats', catsController);

app.listen(4000, () => {
  console.log('kitties abound');
});
