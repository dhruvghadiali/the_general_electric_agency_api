const ErrorResponse = require("@Helpers/error/errorResponse");

const { asyncHandler } = require("@Middleware/async");
const { HTTP_STATUS_CODES } = require("@Helpers/enums");

/**
 * @desc    Ware House Admin sign-in
 * @route   POST /ware-house-admin/sign-in
 * @access  ware-house-admin
 */
const signIn = asyncHandler(async (req, res, next) => {
  const status = true; // Replace with actual sign-in logic
  if (status) {
    // Send response
    res.status(200).json({
      data: [],
      message: "ware-house-admin sign-in successful",
      status: HTTP_STATUS_CODES.STATUS_200,
    });
  } else {
    // Send error response
    next(
      new ErrorResponse("ware-house-admin sign-in failed", HTTP_STATUS_CODES.STATUS_400)
    );
  }
});

module.exports = {
    signIn, 
};