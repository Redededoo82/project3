const db = require("../models");

module.exports = {
    findOne : function(req, res){
        db.Event
            .find({
            })
            .then(function(data){
                res.json(data);
            })
            .catch(err => res.status(422).json(err));
    },

    create : function(req, res){
        db.Event
        .create({
            title: req.body.title
        }).then(function(data){
            res.json(data);
        })
        .catch(err => res.status(422).json(err));

    }
}