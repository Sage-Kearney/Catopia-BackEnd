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

router.get('/:id', (req, res) => {
  Cat.findById({ _id: req.params.id }).then(cats => {
    res.json(cats)
  });
});

router.put('/:id', (req, res) => {
  Cat.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(cat =>
    res.json(cat)).then(() => {res.redirect('/');});
});

router.delete('/:id', (req, res) => {
  Cat.findOneAndDelete({ _id: req.params.id })
  .then(cat => res.json(cat));
});

module.exports = router;
