const router = require("express").Router();
const { user } = require("../config/connections");
const userRouter = require("./userRouter");

router.use("/index", userRouter);
router.use("/users", userRouter);

module.exports = router;
