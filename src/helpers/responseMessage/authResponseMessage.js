const authResponseMessage = {
  invalidCredentials: "Invalid credentials",
  jwtTokenError: "Not authorize to access this route",
  jwtTokenExpire: "Unauthorized: Access token is expired",
  accountDetailsRequired: "Please provide account details",
  unauthorizedUser: "Unauthorized: Access is denied due to invalid credentials",
  superAdminSignUpError: "Super admin already exist in our database",
  superAdminSignUpSuccess: "Super admin signup process successfully completed",
  superAdminSignUpDBError: `Super admin signup process failed, Please try after sometime`,
  superAdminSignUpActivationError: `Super admin account activation failed, Please try after sometime`,
};

module.exports = authResponseMessage;
