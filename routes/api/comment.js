const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router.route("/")
    .get(commentController.findOne)
    .post(commentController.create);



module.exports = router;