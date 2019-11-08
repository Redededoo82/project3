const router = require("express").Router();
const eventController = require("../../controllers/eventController");

router.route("/")
    .get(eventController.findOne)
    .post(eventController.create);



module.exports = router;