const jwt = require("jsonwebtoken"); // installed this
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const sec = secrets.jwtSecret;

    jwt.verify(authorization, sec, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};
