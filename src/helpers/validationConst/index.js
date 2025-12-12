const userValidationConst = require("@Helpers/validationConst/userValidationConst");
const motorValidationConst = require("@Helpers/validationConst/motorValidationConst");
const commonValidationConst = require("@Helpers/validationConst/commonValidationConst");

const validationConst = {
  ...userValidationConst,
  ...motorValidationConst,
  ...commonValidationConst,
};

module.exports = validationConst;
