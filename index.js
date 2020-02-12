const express = require('express');
const app = express();
const catsController = require('./controllers/cats');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/cats', catsController);

app.listen(3000, () => {
  console.log('kitties abound');
});
