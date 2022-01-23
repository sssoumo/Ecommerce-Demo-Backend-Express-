const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid");
        return;
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Yu are not authenticated");
  }
};

const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("You are not allowed");
    }
  });
};

module.exports = { verifyToken, verifyTokenAuthorization };
