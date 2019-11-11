const db = require("../models");

module.exports = {
    findOne : function(req, res){
        db.Comment
            .find({
            })
            .then(function(data){
                res.json(data);
            })
            .catch(err => res.status(422).json(err));
    },

    create : function(req, res){
        db.Comment
        .create({
            user: req.body.user,
            post: req.body.post,
            comment: req.body.comment,
            date: req.body.date
        }).then(function(data){
            res.json(data);
        })
        .catch(err => res.status(422).json(err));

    }
}