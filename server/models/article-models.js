const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArticleSchema = new Schema ({
    title: String,
    description: String
});

module.exports = mongoose.model('articles', ArticleSchema);