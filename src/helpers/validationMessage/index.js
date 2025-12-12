const userValidationMessage = require("@Helpers/validationMessage/userValidationMessage");
const commonValidationMessage = require("@Helpers/validationMessage/commonValidationMessage");
const motorValidationMessage = require("@Helpers/validationMessage/motorValidationMessage");

const validationMessage = {
  ...userValidationMessage,
  ...commonValidationMessage,
  ...motorValidationMessage,
};

module.exports = validationMessage;
