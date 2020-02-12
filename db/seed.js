const mongoose = require('./connection');
const Cat = require('../models/Cat');
const seedData = require('./seeds.json');

Cat.deleteMany({})
.then(() => {
    console.log('deleted data');
    return Cat.collection.insertMany(seedData);
})
.then(() => {
    console.log('added cats!');
    process.exit();
});