const express = require("express");

const signInRouter = require("@Routes/superAdminRouter/authRouter/signInRouter");
const signUpRouter = require("@Routes/superAdminRouter/authRouter/signUpRouter");

const router = express.Router();

router.use("/", signInRouter);
router.use("/", signUpRouter);

module.exports = router;
