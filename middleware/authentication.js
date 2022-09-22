const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { UnauthenticatedError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.decode(token, process.env.JWT_SECRET);

    const { userId, name, exp } = payload;

    // if (!exp || exp < Date.now() / 1000) {
    //   throw new UnauthenticatedError("token is not suitable 1");
    // }

    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

module.exports = auth;
