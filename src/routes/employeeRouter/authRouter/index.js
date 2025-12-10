const express = require("express");

const signInRouter = require("@Routes/employeeRouter/authRouter/signInRouter");

const router = express.Router();

router.use("/", signInRouter);

module.exports = router;
