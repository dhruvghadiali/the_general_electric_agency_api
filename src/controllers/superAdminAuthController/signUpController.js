const User = require("@Models/userModel");
const ErrorResponse = require("@Helpers/error/errorResponse");

const { asyncHandler } = require("@Middleware/async");
const { HTTP_STATUS_CODES } = require("@Helpers/enums");
const {
  superAdminSignUpError,
  superAdminSignUpSuccess,
  superAdminSignUpDBError,
  superAdminSignUpActivationError,
} = require("@Helpers/responseMessage");

/**
 * @desc    Signup new super admin
 * @route   POST /super-admin/signup
 * @access  Super Admin
 */
const signUp = asyncHandler(async (req, res, next) => {
  // Check super admin account is already present in DB or not.
  const user = await User.findOne({
    user_type: "SUPER_ADMIN",
  });

  if (user) {
    // Send error response
    next(
      new ErrorResponse(superAdminSignUpError, HTTP_STATUS_CODES.STATUS_400)
    );
  } else {
    let data = {
      first_name: "piyushkumar",
      last_name: "patel",
      email: "generalagenc@gmail.com",
      phone_number: "7405111564",
      username: "7405111564",
      password: "dh@123456",
      user_type: "SUPER_ADMIN",
    };

    // Create new super admin account
    const superAdmin = await User.create(data);

    if (superAdmin) {
      // Activate super admin account by changing is_active and is_account_verified status value to true.
      const activeSuperAdmin = await User.findOneAndUpdate(
        {
          _id: superAdmin._id,
          user_type: "SUPER_ADMIN",
        },
        {
          is_active: true,
          is_account_verified: true,
        },
        { new: true, runValidators: true }
      );

      if (activeSuperAdmin) {
        // Send response
        res.status(HTTP_STATUS_CODES.STATUS_201).json({
          data: [],
          message: superAdminSignUpSuccess,
          status: HTTP_STATUS_CODES.STATUS_201,
        });
      } else {
        // Send error response
        next(
          new ErrorResponse(
            superAdminSignUpActivationError,
            HTTP_STATUS_CODES.STATUS_401
          )
        );
      }
    } else {
      // Send error response
      next(
        new ErrorResponse(superAdminSignUpDBError, HTTP_STATUS_CODES.STATUS_401)
      );
    }
  }
});

module.exports = {
  signUp,
};
