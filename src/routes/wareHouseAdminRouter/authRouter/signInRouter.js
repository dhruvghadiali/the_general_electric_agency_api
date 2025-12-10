const express = require("express");

const {
  signIn,
} = require("@Controllers/wareHouseAdminAuthController/signInController");

const router = express.Router();

router.route("/sign-in").post(signIn);

module.exports = router;
