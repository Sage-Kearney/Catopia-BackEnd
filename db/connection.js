const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cats', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.Promise = Promise;

module.exports = mongoose;
