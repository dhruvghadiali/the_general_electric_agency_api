const authResponseMessage = require("@Helpers/responseMessage/authResponseMessage");
const commonResponseMessage = require("@Helpers/responseMessage/commonResponseMessage");

const responseMessage = {
  ...authResponseMessage,
  ...commonResponseMessage,
};

module.exports = responseMessage;
