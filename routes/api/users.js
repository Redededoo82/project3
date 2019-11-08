const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findOne)
    .post(userController.create);



module.exports = router;