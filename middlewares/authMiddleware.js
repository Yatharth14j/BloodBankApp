const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the "Authorization" header exists in the request
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      // If the header is missing, return a 401 Unauthorized response
      return res.status(401).send({
        success: false,
        message: "Authorization header missing",
      });
    }

    // Split the "Authorization" header to extract the token
    const token = authHeader.split(" ")[1];

    // Verify the JWT token
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        // If verification fails, return a 401 Unauthorized response
        return res.status(401).send({
          success: false,
          message: "Auth failed",
        });
      } else {
        // If verification succeeds, attach userId to the request object and proceed
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    // Handle other errors and return a 401 Unauthorized response
    return res.status(401).send({
      success: false,
      message: "Auth failed",
      error,
    });
  }
};
