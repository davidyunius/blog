const express = require('express');
const router = express.Router();
const articles = require('../controllers/article-controllers');

router
    .get('/', articles.viewArticles)
    .post('/add', articles.addArticles)
    .delete('/delete/:id', articles.deleteArticles)
    .patch('/update/:id', articles.updateArticles)

module.exports = router;