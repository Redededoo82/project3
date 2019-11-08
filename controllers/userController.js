const db = require("../models");

module.exports = {
    findOne : function(req, res){
        db.User
            .find({
            })
            .then(function(data){
                res.json(data);
            })
            .catch(err => res.status(422).json(err));
    },

    create : function(req, res){
        db.User
        .create({
            email: req.body.email,
            password: req.body.password
        }).then(function(data){
            res.json(data);
        })
        .catch(err => res.status(422).json(err));
    }
}