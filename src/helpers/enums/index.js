/**
 * Central exports for all enums
 * This file provides a single import point for all enumerations in the application
 */

// Import all enum modules
const apiEnums = require("@Helpers/enums/apiEnums");
const userEnums = require("@Helpers/enums/userEnums");
const motorEnums = require("@Helpers/enums/motorEnums");

const enums = {
  ...apiEnums,
  ...userEnums,
  ...motorEnums,
};

module.exports = enums;
