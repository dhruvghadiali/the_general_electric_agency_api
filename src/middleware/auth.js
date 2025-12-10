const jwt = require("jsonwebtoken");

const { USER_TYPES } = require("@Helpers/enums");
const { asyncHandler } = require("@Middleware/async");
const { unauthorizedUser, jwtTokenError } = require("@Helpers/responseMessage");

// const User = require("@Models/userModel");
const ErrorResponse = require("@Helpers/error/errorResponse");

// Common function for user authentication and authorization
const authorizeUser = (userType) =>
  asyncHandler(async (req, res, next) => {
    let token;

    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      if (token) {
        const decodedId = jwt.verify(token, process.env.JWT_SECRET);

        if (decodedId && decodedId.id) {
          const user = undefined;
          // const user = await User.findOne({
          //   _id: decodedId.id,
          //   is_active: true,
          //   is_account_verified: true,
          //   user_type: userType,
          // });

          if (user) {
            req.user = user;
            next();
          } else {
            next(new ErrorResponse(unauthorizedUser, 401));
          }
        } else {
          next(new ErrorResponse(unauthorizedUser, 401));
        }
      } else {
        next(new ErrorResponse(jwtTokenError, 400));
      }
    } else {
      next(new ErrorResponse(jwtTokenError, 400));
    }
  });

const employeeProtect = authorizeUser(USER_TYPES.EMPLOYEE);
const superAdminProtect = authorizeUser(USER_TYPES.SUPER_ADMIN);
const warehouseAdminProtect = authorizeUser(USER_TYPES.WAREHOUSE_ADMIN);

module.exports = {
  employeeProtect,
  superAdminProtect,
  warehouseAdminProtect,
};
