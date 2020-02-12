const express = require('express');
const router = express.Router();
const Cat = require('../models/Cat');

router.get('/', (req, res) => {
  Cat.find({}).then(allCats => res.json(allCats));
});

router.post('/', (req, res) => {
  Cat.create(req.body).then(cat =>
    Cat.find({}).then(allCats => res.json(allCats))
  );
});

module.exports = router;
