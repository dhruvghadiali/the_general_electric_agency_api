const express = require("express");

const {
  signUp,
} = require("@Controllers/superAdminAuthController/signUpController");

const router = express.Router();

router.route("/sign-up").post(signUp);

module.exports = router;
