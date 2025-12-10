/**
 * User type enumeration
 * Defines the different types of users in the system
 */
const USER_TYPES = Object.freeze({
  EMPLOYEE: "EMPLOYEE",
  SUPER_ADMIN: "SUPER_ADMIN",
  WAREHOUSE_ADMIN: "WAREHOUSE_ADMIN",
});

/**
 * User status enumeration
 * Defines the status states for user accounts
 */
const USER_STATUS = Object.freeze({
  ACTIVE: true,
  INACTIVE: false,
});

/**
 * Account verification status enumeration
 */
const ACCOUNT_VERIFICATION_STATUS = Object.freeze({
  VERIFIED: true,
  UNVERIFIED: false,
});

module.exports = {
  USER_TYPES,
  USER_STATUS,
  ACCOUNT_VERIFICATION_STATUS,
};
