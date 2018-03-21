const Articles = require('../models/article-models');

module.exports = {
    viewArticles (req, res) {
        Articles.find().then(artData => {
            res.status(200).json({
                message: 'Article data found!',
                artData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    addArticles (req, res) {
        Articles.create({
            title: req.body.title,
            description: req.body.description
        }).then(artData => {
            res.status(201).json({
                message: 'Article created!',
                artData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    updateArticles (req, res) {
        Articles.update({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title,
                description: req.body.description
            }
        }, {where: {_id:req.params.id}}).then(artData => {
            res.status(200).json({
                message: 'Article data updated!',
                artData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    deleteArticles (req, res) {
        Articles.remove({
            _id: req.params.id
        }).then(artData => {
            res.status(200).json({
                message: 'Article data deleted!',
                artData
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}