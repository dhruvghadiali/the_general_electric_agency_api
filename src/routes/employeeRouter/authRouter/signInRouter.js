const express = require("express");

const {
  signIn,
} = require("@Controllers/employeeAuthController/signInController");

const router = express.Router();

router.route("/sign-in").post(signIn);

module.exports = router;
