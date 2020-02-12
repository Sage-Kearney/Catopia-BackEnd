const mongoose = require('../db/connection');

const CatSchema = new mongoose.Schema({
    name: String,
    type: String,
    img: String,
    personality: String
});

const Cat = mongoose.model('Cat', CatSchema);
module.exports = Cat;