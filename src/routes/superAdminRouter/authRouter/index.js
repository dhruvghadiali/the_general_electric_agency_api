const express = require("express");

const signInRouter = require("@Routes/superAdminRouter/authRouter/signInRouter");

const router = express.Router();

router.use("/", signInRouter);

module.exports = router;
