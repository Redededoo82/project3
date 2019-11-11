const router = require("express").Router();
const userRoutes = require("./users");
const eventRoutes = require("./events");
const commentRoutes = require("./comment");

// Book routes
router.use("/users", userRoutes);
router.use("/events", eventRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
