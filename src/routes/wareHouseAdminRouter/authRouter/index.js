const express = require("express");

const signInRouter = require("@Routes/wareHouseAdminRouter/authRouter/signInRouter");

const router = express.Router();

router.use("/", signInRouter);

module.exports = router;
