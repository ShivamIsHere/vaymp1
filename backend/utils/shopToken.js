const sendShopToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days
    httpOnly: true, // Only accessible by the web server
    sameSite: "None",  // Use Strict or Lax
    secure: process.env.NODE_ENV === "PRODUCTION" // Ensure cookies are sent over HTTPS in production
  };

  res.status(statusCode).cookie("seller_token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendShopToken;
